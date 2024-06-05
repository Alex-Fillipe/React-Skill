import React, { useState, useEffect } from 'react';
import { ModalContainer, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Select } from './styles';
import { fetchAvailableSkills } from '../../Utils/api';
import Botao from '../../Components/Botao/index';

const AddSkillModal = ({ onClose, onSave }) => {
    const [availableSkills, setAvailableSkills] = useState([]);
    const [selectedSkill, setSelectedSkill] = useState('');
    const [level, setLevel] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const loadAvailableSkills = async () => {
            const skills = await fetchAvailableSkills();
            setAvailableSkills(skills);
        };
        loadAvailableSkills();
    }, []);

    const handleSave = () => {
        const newSkill = {
            id: Math.random().toString(36).substr(2, 9),
            name: selectedSkill,
            level,
            description,
            imageUrl: availableSkills.find(skill => skill.name === selectedSkill)?.imageUrl || ''
        };
        onSave(newSkill);
        onClose();
    };

    return (
        <ModalContainer>
            <ModalContent>
                <ModalHeader>
                    <h2>Adicionar Skill</h2>
                </ModalHeader>
                <ModalBody>
                    <Select
                        value={selectedSkill}
                        onChange={(e) => setSelectedSkill(e.target.value)}
                    >
                        <option value="">Selecione uma Skill</option>
                        {availableSkills.map(skill => (
                            <option key={skill.id} value={skill.name}>
                                {skill.name}
                            </option>
                        ))}
                    </Select>
                    <Input
                        type="text"
                        placeholder="Level"
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder="Descrição"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </ModalBody>
                <ModalFooter>
                    <Botao onClick={onClose} text="Cancelar" className="danger" />
                    <Botao onClick={handleSave} text="Salvar" />
                </ModalFooter>
            </ModalContent>
        </ModalContainer>
    );
};

export default AddSkillModal;
