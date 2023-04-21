import { Injectable } from '@nestjs/common';
import { OrderDetailsDto, OrderToCreateDto, UpdateOrderDto } from './dtos';
import { API_URL } from 'src/main';
import { HttpService } from '@nestjs/axios';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable()
export class OrdersService {
  constructor(private readonly httpService: HttpService) {}
  create(createOrderDto: OrderToCreateDto) {
    this.httpService.post(`${API_URL}/orders`, createOrderDto).pipe(
      map(() => {
        console.log();
      }),
    );
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    this.httpService.get(`${API_URL}/order/${id}`)
    .pipe(
      map((response) => {
        const orderDetails = response.data as OrderDetailsDto;
        return orderDetails;
      }),
      catchError((err) => {
        if (err.status === 404) {
          return throwError({ error: "La commande n'existe pas" });
        } else {
          return throwError(err);
        }
      })
    )
    .subscribe();
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
