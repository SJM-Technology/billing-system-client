import { IProduct } from ".";
import { HttpResponse } from "../default_models";

export type ProductResponseData =  HttpResponse< IProduct[] >