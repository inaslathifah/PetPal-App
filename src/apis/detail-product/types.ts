export interface DetailProductType {
    product_name?: string;
    description?: string;
    price?: number | any;
    stock?: number;
    product_picture?: string;
}

export interface NumberFormatterProps {
    value: number | any;
}