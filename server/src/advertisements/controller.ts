import { JsonController, NotFoundError, Get, Put, Post, Param, HttpCode, Body } from 'routing-controllers'
import Advertisement from './entity';

@JsonController()
export default class AdvertisementController {

    @Get('/advertisements')
    async allAdvertisements() {
      const advertisements = await Advertisement.find()
      return { advertisements }
    }

    @Get('/advertisements/:id')
    getAdvertisement(
        @Param('id') id: number
    ) {
        return Advertisement.findOne(id)
    }

    @Put('/advertisements/:id')
    async updateAdvertisement(
      @Param('id') id: number,
      @Body() update: Partial<Advertisement>
    ) {
      const advertisement = await Advertisement.findOne(id)
      if (!advertisement) throw new NotFoundError('Cannot find page')
    
      return Advertisement.merge(advertisement, update).save()
    }

    @Post('/advertisements')
    @HttpCode(201)
    createAdvertisement(
      @Body() advertisement: Advertisement
    ) {
      return advertisement.save()
    }
}