import styled from 'styled-components';

export const SkillItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ccc;
`;

export const SkillImage = styled.img`
    width: 50px;
    height: 50px;
`;

export const SkillName = styled.div`
    flex: 1;
    margin-left: 10px;
`;

export const SkillLevel = styled.div`
    margin-left: 10px;
`;

export const SkillDescription = styled.div`
    flex: 2;
    margin-left: 10px;
`;

export const SkillActions = styled.div`
    display: flex;
    align-items: center;
`;

export const Input = styled.input`
    padding: 5px;
    margin-right: 10px;
`;
