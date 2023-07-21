import React from "react";

export type ServiceCardProps={
    title:string,
    icon:string,
    description:string
}
export interface ICardBase{
    title:string,
    image:string
}
export interface OtherCollectionCardProps  extends ICardBase{
    slug:string
};
export interface MiscCardProps extends ICardBase, React.PropsWithChildren{
};

export interface CountryLeagueCardProps extends ICardBase{
    slug:string
};

export interface PopularTCardProps extends ICardBase{
    slug:string,
    discount:string,
    price:string,
    discountPercent:string
};
