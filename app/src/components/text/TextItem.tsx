import React, { FC, useState } from 'react';
import styled from '@emotion/styled';

interface TextItemProps {
    title: string;
    author: string;
    summary: string;
}

const TextItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
    transition: 0.3s box-shadow;
    cursor: pointer;
    width: 350px;
    height: 200px;
    &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        color: white;
        background-color: black;
    }
`;

const TextItemContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 15px;
`;

const Title = styled.div`
    display: -webkit-box;
    overflow: hidden;
    margin-bottom: 3px;
    text-overflow: ellipsis;
    white-space: normal;
    overflow-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 20px;
    font-weight: 700;
`;

const Author = styled.div`
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    overflow-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 16px;
    opacity: 0.8;
`;

const Summary = styled.div`
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    overflow-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 16px;
    opacity: 0.8;
`;

const TextItem: FC<TextItemProps> = function ({ title, author, summary }) {
    const [isHover, setIsHover] = useState(false);
    return (
        <TextItemWrapper
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <TextItemContent>
                {!isHover ? (
                    <>
                        <Title>{title}</Title>
                        <Author>{author}</Author>
                    </>
                ) : (
                    <Summary>{summary}</Summary>
                )}
            </TextItemContent>
        </TextItemWrapper>
    );
};

export default TextItem;