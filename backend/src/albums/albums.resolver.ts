import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AlbumsService } from './albums.service';
import { CreateAlbumInput } from './dto/create-album.input';
import { UpdateAlbumInput } from './dto/update-album.input';
import { Prisma } from '@prisma/client';

@Resolver('Album')
export class AlbumsResolver {
  constructor(private readonly albumsService: AlbumsService) {}

  @Mutation('createAlbum')
  create(@Args('createAlbumInput') createAlbumInput: Prisma.AlbumCreateInput) {
    return this.albumsService.create(createAlbumInput);
  }

  @Query('albums')
  findAll() {
    return this.albumsService.findAll();
  }

  @Query('album')
  findOne(
    @Args('albumFindFirstArgs') albumFindFirstArgs: Prisma.AlbumFindFirstArgs,
  ) {
    return this.albumsService.findOne(albumFindFirstArgs);
  }

  @Mutation('updateAlbum')
  update(
    @Args('updateAlbumInput') updateAlbumInput: Prisma.AlbumUpdateInput,
    @Args('albumWhereInput') albumWhereInput: Prisma.AlbumWhereUniqueInput,
  ) {
    return this.albumsService.update(updateAlbumInput, albumWhereInput);
  }

  @Mutation('removeAlbum')
  remove(@Args('id') id: number) {
    return this.albumsService.remove(id);
  }
}
