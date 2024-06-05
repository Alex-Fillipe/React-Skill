import React, { useState } from 'react';
import { SkillItem, SkillImage, SkillName, SkillLevel, SkillDescription, SkillActions, Input }from './styles';
import Botao from '../../Components/Botao/index';

const SkillList = ({ skills, onDelete, onEditLevel }) => {
    const [editingSkillId, setEditingSkillId] = useState(null);
    const [newLevel, setNewLevel] = useState('');

    const handleEditClick = (skill) => {
        setEditingSkillId(skill.id);
        setNewLevel(skill.level);
    };

    const handleSaveClick = (skillId) => {
        onEditLevel(skillId, newLevel);
        setEditingSkillId(null);
    };

    return (
        <div>
            {skills.map(skill => (
                <SkillItem key={skill.id}>
                    <SkillImage src={skill.imageUrl} alt={skill.name} />
                    <SkillName>{skill.name}</SkillName>
                    <SkillLevel>
                        {editingSkillId === skill.id ? (
                            <Input 
                                type="text" 
                                value={newLevel} 
                                onChange={(e) => setNewLevel(e.target.value)} 
                            />
                        ) : (
                            skill.level
                        )}
                    </SkillLevel>
                    <SkillDescription>{skill.description}</SkillDescription>
                  
                    <SkillActions>
                        {editingSkillId === skill.id ? (
                            <Botao onClick={() => handleSaveClick(skill.id)} text="Salvar"  className="success"/>
                        ) : (
                            <Botao onClick={() => handleEditClick(skill)} text="Editar" className="primary"/>
                        )}
                        <Botao onClick={() => onDelete(skill.id)}text="Excluir" className="danger"/>
                    </SkillActions>
                </SkillItem>
            ))}
        </div>
    );
};

export default SkillList;

