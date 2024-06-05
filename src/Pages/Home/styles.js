
import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 0 5px;

    &:hover {
        background-color: #0056b3;
    }
`;

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

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 4px;
    width: 400px;
`;

export const ModalHeader = styled.div`
    margin-bottom: 20px;
`;

export const ModalBody = styled.div`
    margin-bottom: 20px;
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Select = styled.select`
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
`;
