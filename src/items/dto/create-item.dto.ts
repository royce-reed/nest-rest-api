// Data Transfer Object for creating an item
// https://docs.nestjs.com/controllers#request-payloads=
export class CreateItemDto {
  readonly name: string;
  readonly qty: number;
  readonly description: string;
}
