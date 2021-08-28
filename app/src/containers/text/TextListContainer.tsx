import React, { FC } from 'react';
import TextList from 'components/text/TextList';
const TextListEX = [
    {
        id: 'abc',
        title: '서시',
        author: '윤동주',
        summary: '죽는 날까지 하늘을 우러러 한점 부끄럼이 없기를',
    },
    {
        id: 'abc2',
        title: '너에게 묻는다',
        author: '안도현',
        summary: '연탄재 함부로 발로 차지 마라',
    },
];
const TextListContainer: FC = function () {
    return (
        <>
            <TextList texts={TextListEX} />
        </>
    );
};

export default TextListContainer;