import React from "react";
import { CategoryCardStyles as Styled } from "./styles";
const categorys = [
    "New",
    "Games",
    "Domains",
    "Sports",
    "Metaverse",
    "MetaArt",
    "Music",
];
export const CategoryCard = () => {
    return (
        <Styled.CategoryCard>
            {categorys.map((item, index) => {
                return <Styled.Item key={index}>{item}</Styled.Item>;
            })}
        </Styled.CategoryCard>
    );
};
