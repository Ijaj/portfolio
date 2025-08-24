'use client';
import axios from 'axios';
import { MouseEventHandler, useEffect, useState } from 'react';
import { Box, Button, Grid, FormControl, TextField, InputLabel, List, ListItem, Stack, IconButton } from '@mui/material';
import TitledBox from '../components/TitledBox';
import TextEditor from '../components/TextEditor';
import { DataState } from '@/app/types/dashboard';
import EditIcon from '@mui/icons-material/Edit';

interface MediaItem {
  type: 'img' | 'vd';
  url: string;
}

interface AboutCard {
  title: string;
  value: number;
}

export default function AdminDashboard() {
  // Global Settings
  const [siteTitle, setSiteTitle] = useState('');
  const [pp, setPp] = useState('');

  // Hero Section
  const [heroTitle, setHeroTitle] = useState('');
  const [heroText, setHeroText] = useState('');

  // About Section
  const [aboutTitle, setAboutTitle] = useState('');
  const [aboutText, setAboutText] = useState('');
  const [aboutCards, setAboutCards] = useState<AboutCard[]>([{ title: 'title 1', value: 1 }]);
  const [aboutProjCompleted, setAboutProjCompleted] = useState(0);
  const [aboutExperience, setAboutExperience] = useState(0);
  const [aboutExperienceSelf, setAboutExperienceSelf] = useState(0);
  const [aboutTech, setAboutTech] = useState(0);
  const [aboutLinks, setAboutLinks] = useState({
    git: '',
    linkedin: '',
    twitter: ''
  });

  // Other sections
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  // UI State
  const [files, setFiles] = useState<File[]>([]);
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [currentAboutCardEditIndex, setCurrentAboutCardEditIndex] = useState<number | null>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles([...e.target.files!]);
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      alert('Please select at least one file first');
      return;
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files', file);
    });

    try {
      const res = await axios.post('http://localhost:5000/upload-multiple', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setMediaList((prev) => [...prev, ...res.data]);
      setFiles([]);
      alert('Files uploaded successfully!');
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    }
  };

  function addNewAboutCard() {
    const newCard = { title: '', value: 0 };
    setAboutCards((prev) => [...prev, newCard]);
    setCurrentAboutCardEditIndex(aboutCards.length); // Index of the new card
  }

  function updateAboutCard(index: number, field: 'title' | 'value', value: number | string) {
    if (field === 'value' && value === '') return;

    setAboutCards((prev) => {
      const newArray = [...prev];
      newArray[index] = { ...newArray[index], [field]: value };
      return newArray;
    });
  }

  // Helper function to get all data when needed (for API calls, etc.)
  const getAllData = (): DataState => ({
    siteTitle,
    pp,
    heroTitle,
    heroText,
    aboutTitle,
    aboutText,
    aboutCards,
    aboutProjCompleted,
    aboutExperience,
    aboutExperienceSelf,
    aboutTech,
    aboutLinks,
    education,
    skills,
    projects
  });

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        {/* Global Settings */}
        <Grid size={{ xs: 12 }}>
          <TitledBox title="Global Settings">
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="site-title" />
              <TextField
                variant="outlined"
                id="site-title"
                value={siteTitle}
                label="Site Title"
                onChange={(e) => setSiteTitle(e.target.value)}
              />
            </FormControl>
          </TitledBox>
        </Grid>

        {/* Hero Section */}
        <Grid size={{ xs: 12 }}>
          <TitledBox title="Hero Section">
            <Grid container spacing={3}>
              <Grid size={{ xs: 12 }}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="hero-title" />
                  <TextField id="hero-title" value={heroTitle} label="Hero Title" onChange={(e) => setHeroTitle(e.target.value)} />
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextEditor description={heroText} setDescription={setHeroText} />
              </Grid>
            </Grid>
          </TitledBox>
        </Grid>

        {/* About Section */}
        <Grid size={{ xs: 12 }}>
          <TitledBox title="About Section">
            <Grid container spacing={3}>
              <Grid size={{ xs: 12 }}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="about-title" />
                  <TextField id="about-title" value={aboutTitle} label="About Title" onChange={(e) => setAboutTitle(e.target.value)} />
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextEditor description={aboutText} setDescription={setAboutText} />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TitledBox title="Cards">
                  <List>
                    {aboutCards.map((cardData, index) => (
                      <ListItem key={index}>
                        <Stack spacing={3} direction={'row'} sx={{ width: '100%' }}>
                          <FormControl fullWidth>
                            <TextField
                              value={aboutCards[index].title}
                              onChange={(e) => updateAboutCard(index, 'title', e.target.value)}
                              disabled={currentAboutCardEditIndex !== index}
                              label="Card Title"
                            />
                          </FormControl>
                          <FormControl fullWidth>
                            <TextField
                              type="number"
                              value={aboutCards[index].value}
                              onChange={(e) => updateAboutCard(index, 'value', Number.parseInt(e.target.value))}
                              disabled={currentAboutCardEditIndex !== index}
                              label="Card Value"
                            />
                          </FormControl>
                          <Button variant="outlined" onClick={() => setCurrentAboutCardEditIndex(index)}>
                            <EditIcon />
                          </Button>
                          <IconButton>
                            <EditIcon />
                          </IconButton>
                        </Stack>
                      </ListItem>
                    ))}
                  </List>
                  <Button variant="outlined" onClick={addNewAboutCard} sx={{ mt: 2 }}>
                    Add New Card
                  </Button>
                </TitledBox>
              </Grid>
            </Grid>
          </TitledBox>
        </Grid>
      </Grid>
    </Box>
  );
}
