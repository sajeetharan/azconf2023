export interface player {
  id?: string;
  name: string;
  type: Type;
  wickets: string;
  country: string;
  runs:string;
  picture_link?: string;
}

export enum Type {
  Contract = "Contract",
  Fulltime = "Fulltime",
  Local = "Local",
}
