export interface ListProductResponse {
  item_available: boolean;
  item_created_on: string;
  item_details: string;
  item_id: string;
  item_image: string;
  item_last_updated_on: string;
  item_name: string;
  item_price: {
    amount: number;
    size: string;
  }[];

  item_type: string;
}
