import styled from 'styled-components';

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

export const Input = styled.input`
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
`;
