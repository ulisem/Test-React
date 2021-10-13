import styled from 'styled-components';


export const Input = styled.input`
    width:222px;
    height:51px;
    padding: 10px;

`;


export const UI = styled.ul`
display:contents;
`;


export const Li = styled.ul`
    width:22px;
    font-weight:bold;
    height:51px;
    padding:10px;
    display:block;
    background: #f5f0f0;
    border-bottom: 1px solid white;
    &:hover{
        cursor:pointer;
    }
`;

export const SuggestContainer = styled.div`
    height:240px;
    width:240px;
    overflow:scroll;
    &::webkit-scrollbar{
        display:none;
    }
    -ms-overflow-style: none;
    scroll-width:none:
`;