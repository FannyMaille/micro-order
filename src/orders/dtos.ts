import { ApiProperty } from '@nestjs/swagger';

export class OrderToCreateDto {
  @ApiProperty({
    example: [
      {
        productId: "i'etpuoy",
        quantity: 234,
      },
    ],
  })
  products: PurchasedProductDto[];
}

export interface OrderCreatedDto {
  id: string;
}

export interface PurchasedProductDto {
  productId: string;
  quantity: number;
}

export interface OrderDetailsDto {
  id: string;
  status: OrderStatusDto;
  products: PurchasedProductDto[];
}

export enum OrderStatusDto {
  Pending = 'Pending',
  Delivered = 'Delivered',
}

export interface UpdateOrderDto {
  status: OrderStatusDto;
}
