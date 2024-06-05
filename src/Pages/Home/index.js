import React, { useState, useEffect } from 'react';
import SkillList from '../../Components/SkillList/index';
import AddSkillModal from '../../Components/AddSkillModal/index';
import { fetchSkills } from '../../Utils/api'; 
import { Container, Button, Header } from './styles';

const Home = () => {
    const [skills, setSkills] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        
        const loadSkills = async () => {
            const skills = await fetchSkills();
            setSkills(skills);
        };
        loadSkills();
    }, []);

    const handleAddSkill = (newSkill) => {
        setSkills([...skills, newSkill]);
    };

    const handleDeleteSkill = (skillId) => {
        setSkills(skills.filter(skill => skill.id !== skillId));
    };

    const handleEditLevel = (skillId, newLevel) => {
        setSkills(skills.map(skill => 
            skill.id === skillId ? { ...skill, level: newLevel } : skill
        ));
    };

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        window.location.href = '/login';
    };

    return (
        <Container>
            <Header>
                <h1>Home</h1>
                <Button onClick={() => setIsModalOpen(true)}>Adicionar Skill</Button>
                <Button onClick={handleLogout}>Logout</Button>
            </Header>
            <SkillList 
                skills={skills} 
                onDelete={handleDeleteSkill} 
                onEditLevel={handleEditLevel} 
            />
            {isModalOpen && 
                <AddSkillModal 
                    onClose={() => setIsModalOpen(false)} 
                    onSave={handleAddSkill} 
                />
            }
        </Container>
    );
};

export default Home;
