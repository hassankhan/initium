export interface HukdDeal {
  [name: string]: number | object | string;
  title: string;
  deal_link: string;
  mobile_deal_link: string;
  deal_image: string;
  description: string;
  submit_time: string;
  hot_time: string;
  poster_name: string;
  temperature: number;
  price: string;
  timestamp: number;
  expired: string;
  forum: {
    name: string;
    url_name: string;
  };
  category: {
    name: string;
    url_name: string;
  };
  merchant: {
    name: string;
    url_name: string;
  };
  tags: {
    items: string[]
  };
  deal_image_highres: string;
  deal_image_highres_width: number;
  deal_image_highres_height: number;
}

export interface HukdResult {
  [name: string]: number | object | string;
  deals: {
    items: HukdDeal[];
  };
}
