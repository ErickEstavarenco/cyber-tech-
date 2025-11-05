// src/hooks/useForm.js
import { useState } from 'react';

export function useForm(initialValues = {}, onSubmit) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpa o erro do campo quando o usuário começa a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = (values) => {
    const newErrors = {};
    
    // Validação de email
    if (values.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(values.email)) {
        newErrors.email = 'Por favor, insira um email válido';
      }
    }

    // Validação de senha
    if (values.password) {
      if (values.password.length < 6) {
        newErrors.password = 'A senha deve ter pelo menos 6 caracteres';
      }
    }

    // Validação de confirmação de senha
    if (values.confirmPassword) {
      if (values.password !== values.confirmPassword) {
        newErrors.confirmPassword = 'As senhas não conferem';
      }
    }

    // Validação de nome
    if (values.nome) {
      if (values.nome.trim().length < 2) {
        newErrors.nome = 'O nome deve ter pelo menos 2 caracteres';
      }
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate(values);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } catch (error) {
        setErrors({ submit: error.message || 'Ocorreu um erro. Tente novamente.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setValues,
    setErrors
  };
}

