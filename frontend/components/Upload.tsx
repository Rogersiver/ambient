import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';
import { createTrackMutation } from '../lib/createTrack';
import { updateUsersTrackMutation } from '../lib/updateUsersTrack';

const StyledInput = styled.input`
  background: ${(props) => props.theme.palette.colors.gray['50']};
  color: ${(props) => props.theme.palette.common.black};
  cursor: pointer;
  width: 90%;
  border-radius: ${(props) => props.theme.borderRadius};
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.palette.common.black};
  }
  :-ms-input-placeholder {
    color: ${(props) => props.theme.palette.common.black};
  }
  height: 5vh;
  border-color: transparent;
  font-family: monospace;
  box-shadow: 0px;
  margin-block: 1vh;
  outline: none;
  transition: 0.15s;
  text-align: center;
`;

const FileInputContainer = styled(motion.div)`
  margin-block: 5vh;
  margin-inline: 2vh;
  padding: 2vh;
  display: flex;
  border: 1px solid ${(props) => props.theme.palette.common.black};
  color: ${(props) => props.theme.palette.common.black};
  border-radius: ${(props) => props.theme.borderRadius};
`;

const FileInput = styled.input`
  padding: 1vh;
  border-radius: ${(props) => props.theme.borderRadius};
  display: inline-block;
  font-family: monospace;
  flex: 80%;
  padding: 6px 12px;
  cursor: pointer;
`;

const FileInputSubmit = styled.input`
  float: right;
  padding: 1vh;
  font-family: monospace;
  border-radius: ${(props) => props.theme.borderRadius};
`;

const InputContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Upload = (props: any) => {
  const { usersTrack } = props;
  const [file, setFile] = useState<File | undefined>(undefined);
  const [fileName, setFileName] = useState<string>('');
  const [isLoading, setIsLoading] = useState(0);

  const [trackName, setTrackName] = useState('');
  const [trackArtist, setTrackArtist] = useState('');
  const [trackMessage, setTrackMessage] = useState('');

  const [createTrack, { data, loading, error }] = createTrackMutation();
  const [updateUsersTrack, mut2] = updateUsersTrackMutation();

  const handleUpload = async (file: File) => {
    setIsLoading(1);
    const formData = new FormData();
    formData.append('file', file);
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event: ProgressEvent) => {
        console.log(
          `Current progress:`,
          Math.round((event.loaded * 100) / event.total)
        );
      },
    };

    

    const response = await axios.post('/api/uploadTrack', formData, config);

    createTrack({
      variables: {
        createTrackInput: {
          track_name: trackName,
          track_description: trackMessage,
          is_uploaded: true,
          wav_cloudinary_url: response.data.path,
        },
      },
    });
    setIsLoading(2);
  };

  useEffect(() => {
    if (data) {
      updateUsersTrack({
        variables: {
          updateUsersTrackInput: {
            track_id: Number(data.createTrack.id),
          },
          usersTracksWhereInput: {
            id: Number(usersTrack.id),
          },
        },
      });
    }
  }, [data]);

  return (
    <>
      <InputContainer
        style={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 6 }}
      >
        <StyledInput
          onChange={(e) => {
            setTrackName(e.target.value);
          }}
          placeholder='Insert Song Name'
        />
        <StyledInput
          onChange={(e) => {
            setTrackArtist(e.target.value);
          }}
          placeholder='Insert Artist Name'
        />
        <StyledInput
          onChange={(e) => {
            setTrackMessage(e.target.value);
          }}
          placeholder='Insert Message'
        />
      </InputContainer>
      <FileInputContainer
        style={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 9 }}
      >
        {isLoading === 0 ? (
          <>
            <FileInput
              type='file'
              name={fileName}
              onChange={(e) => {
                if (e.target.files !== null) {
                  setFile(e.target.files[0]);
                  setFileName(e.target.name);
                }
              }}
            />
            <FileInputSubmit
              type='submit'
              onClick={(e) => {
                file && handleUpload(file);
              }}
            />
          </>
        ) : isLoading === 1 ? (
          <>Loading</>
        ) : isLoading === 2 ? (
          <>Success</>
        ) : (
          <></>
        )}
      </FileInputContainer>
    </>
  );
};

export default Upload;
