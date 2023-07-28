export interface httpResponse {
  message: string;
  status: number;
  data?: any;
  user?: any;
  list?: Array<any>;
  total?: number;
  token?: string;
}

export interface pageQuery {
  page: number;
  page_size: number;
  sort_by?: Array<string>;
  sort_desc?: Array<boolean>;
}

export interface storeLogin {
  name: string;
  pwd: string;
}

export interface Model {
  id?: number;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

