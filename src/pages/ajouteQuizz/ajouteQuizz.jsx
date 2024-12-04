import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import NavBarEntreprise from "../../components/navBarEntreprise/navBarEntreprise";
import { useNavigate, useParams } from "react-router-dom";
import { AjouterQuizz } from "../../service/ajouterQuizz";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const AjouteQuizz = () => {
  const [questions, setQuestions] = useState([
    { questionText: "", answers: ["", ""], correctAnswerIndex: 0 },
  ]);
  const { idOffer } = useParams();
  const navigate = useNavigate()
  const {entreprise} = useSelector((state) => state.loginEntreprise);
  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].questionText = value;
    setQuestions(updatedQuestions);
  };

  const handleAnswerChange = (qIndex, aIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].answers[aIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleAddAnswer = (qIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].answers.push("");
    setQuestions(updatedQuestions);
  };

  const handleRemoveAnswer = (qIndex, aIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].answers.splice(aIndex, 1);
    setQuestions(updatedQuestions);
  };

  const handleCorrectAnswerChange = (qIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].correctAnswerIndex = parseInt(value, 10);
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { questionText: "", answers: [], correctAnswerIndex: 0 },
    ]);
  };

  const handleRemoveQuestion = (qIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(qIndex, 1);
    setQuestions(updatedQuestions);
  };
  const handleSubmit = () => {
    const formattedQuestions = questions.map((q) => ({
      titre: q.questionText,
      offer: idOffer,
      reponses: q.answers.map((answer, index) => ({
        reponseText: answer,
        isCorrect: index === q.correctAnswerIndex,
      })),
    }));
    let data = {questions:formattedQuestions}
    AjouterQuizz(data,entreprise.token).then((response) =>{
      if(response.status==201){
        toast.success("Quizz bien ajoute ", { autoClose: 1000 });
        navigate("/listOfferEmplois"); 
    }
    })
  };


  return (
    <div>
      <NavBarEntreprise />
      <Box
        sx={{
          maxWidth: "900px",
          margin: "auto",
          padding: "20px",
          backgroundColor: "#f4f6f9",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#499ce6",
            fontWeight: "bold",
          }}
        >
          Ajouter un Quiz
        </Typography>

        {questions.map((question, qIndex) => (
          <Card
            key={qIndex}
            sx={{
              marginBottom: "20px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{ color: "#333", fontWeight: "bold", marginBottom: "10px" }}
              >
                Question {qIndex + 1}
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Saisissez votre question ici"
                value={question.questionText}
                onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                sx={{
                  marginBottom: "20px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                  },
                }}
              />
              <Typography
                variant="h6"
                sx={{ marginBottom: "10px", color: "#555" }}
              >
                Réponses
              </Typography>
              {question.answers.map((answer, aIndex) => (
                <Grid container alignItems="center" spacing={2} key={aIndex}>
                  <Grid item xs={10}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder={`Réponse ${aIndex + 1}`}
                      value={answer}
                      onChange={(e) =>
                        handleAnswerChange(qIndex, aIndex, e.target.value)
                      }
                      sx={{
                        marginBottom: "10px",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton
                      color="error"
                      onClick={() => handleRemoveAnswer(qIndex, aIndex)}
                      disabled={question.answers.length <= 2}
                    >
                      <RemoveCircleOutline />
                    </IconButton>
                  </Grid>
                </Grid>
              ))}

              <Button
                onClick={() => handleAddAnswer(qIndex)}
                startIcon={<AddCircleOutline />}
                sx={{
                  color: "#499ce6",
                  textTransform: "none",
                  marginBottom: "20px",
                }}
              >
                Ajouter une Réponse
              </Button>

              <Divider />
              <Typography
                variant="h6"
                sx={{ marginTop: "20px", color: "#555", fontWeight: "bold" }}
              >
                Réponse Correcte
              </Typography>
              <RadioGroup
                value={question.correctAnswerIndex}
                onChange={(e) =>
                  handleCorrectAnswerChange(qIndex, e.target.value)
                }
              >
                {question.answers.map((_, aIndex) => (
                  <FormControlLabel
                    key={aIndex}
                    value={aIndex}
                    control={
                      <Radio
                        sx={{
                          color: "#499ce6",
                          "&.Mui-checked": { color: "#499ce6" },
                        }}
                      />
                    }
                    label={`Réponse ${aIndex + 1}`}
                  />
                ))}
              </RadioGroup>


              <Button
                onClick={() => handleRemoveQuestion(qIndex)}
                color="error"
                sx={{
                  marginTop: "20px",
                  textTransform: "none",
                }}
              >
                Supprimer la Question
              </Button>
            </CardContent>
          </Card>
        ))}

        {/* Add Question */}
        <Button
          onClick={handleAddQuestion}
          variant="outlined"
          startIcon={<AddCircleOutline />}
          sx={{
            display: "block",
            margin: "20px auto",
            color: "#499ce6",
            borderColor: "#499ce6",
            borderRadius: "8px",
            textTransform: "none",
            "&:hover": { backgroundColor: "#eaf4fc" },
          }}
        >
          Ajouter une Nouvelle Question
        </Button>

        {/* Submit Quiz */}
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            display: "block",
            margin: "20px auto",
            backgroundColor: "#499ce6",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            textTransform: "none",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#377dbf" },
          }}
        >
          Enregistrer
        </Button>
      </Box>
    </div>
  );
};

export default AjouteQuizz;
