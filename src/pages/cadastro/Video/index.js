import React, { useEffect, useState } from 'react';
import PageDefault from '../../../components/PageDefault/index.js';
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../../components/FormField/index.js';
import Button from '../../../components/Button/index.js';
import useForm from '../../../hooks/useForm.js';
import videosRepository from '../../../repositories/videos.js';
import categoriasRepository from '../../../repositories/categorias.js';

function CadastroVideo () {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  console.log(categoryTitles);
  const { handleChange, values } = useForm({
    titulo: 'Vídeo',
    url: 'https://www.youtube.com/watch?v=GXK20FJaYzM',
    categoria: ''
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Video Cadastrado com sucesso!!!1!');
        

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <br />
      <br />

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;