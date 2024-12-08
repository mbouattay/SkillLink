import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Button,
  Box,
  Divider,
} from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';
import { getQuizz } from '../../service/getQuizz';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { QuizzResultat } from '../../service/QuizzResultat';

const QuizPage = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [Quizz, setQuizz] = useState([]);
  const { user } = useSelector((state) => state.login);
  const { idoffer } = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    getQuizz(idoffer, user.token).then((response) => {
      console.log(response.data.resault)
      setQuizz(response.data.resault); 
      setTotalQuestions(response.data.resault.length); 
    });
  }, []);

  const handleChange = (event) => {
    setAnswers({ ...answers, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let correctAnswers = 0;
    Quizz.forEach((question) => {
      const correctOption = question.reponses.find((reponse) => reponse.isCorrect);
      if (correctOption && answers[question._id] === correctOption.reponseText) {
        correctAnswers++;
      }
    });
    setSubmitted(true);
    let data={
      offer:idoffer,
      Employe:user.id,
      score:(correctAnswers / totalQuestions)*100 
    }
      QuizzResultat(data).then((response)=>{
        console.log(response)
        if(response.data.success==false){
          toast.warn("Application rejected", { autoClose: 1000 });
          navigate("/"); 
        }else{
          toast.success("Application accepted successfully", { autoClose: 1000 });
          navigate("/");
        }
      })
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <QuizIcon color="primary" sx={{ fontSize: 40, mr: 1 }} />
          <Typography variant="h4" component="h1" color="primary">
            Test de Compétences
          </Typography>
        </Box>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Répondez à ce quiz pour vérifier votre éligibilité à l'offre d'emploi.
        </Typography>
        <Divider sx={{ my: 3 }} />
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2}>
            {Quizz.map((question, index) => (
              <Box
                key={question._id}
                flex="1 1 45%"
                sx={{
                  minWidth: '300px',
                  p: 2,
                  border: '1px solid #e0e0e0',
                  borderRadius: 2,
                  backgroundColor: '#f9f9f9',
                }}
              >
                <FormControl component="fieldset" sx={{ mb: 2 }}>
                  <Typography variant="h6">{index + 1}. {question.titre}</Typography>
                  <RadioGroup
                    name={question._id}
                    onChange={handleChange}
                    value={answers[question._id] || ''}
                  >
                    {question.reponses.map((reponse) => (
                      <FormControlLabel
                        key={reponse._id}
                        value={reponse.reponseText}
                        control={<Radio />}
                        label={reponse.reponseText}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Box>
            ))}
          </Box>
          <Box display="flex" justifyContent="center" mt={4}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={submitted}
            >
              {submitted ? 'Quiz Soumis' : 'Soumettre le Quiz'}
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default QuizPage;
