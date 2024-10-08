import {defineField, defineType} from 'sanity'

export const usuarioType = defineType({
  name: 'usuario',
  title: 'Usuário',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Identificador único',
      type: 'number',
    }),
    defineField({
      name: 'nome',
      title: 'Nome',
      type: 'string',
    }),
    defineField({
      name: 'dataNascimento',
      title: 'Data de Nascimento',
      type: 'date',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'telefone',
      title: 'Telefone',
      type: 'string',
    }),
    defineField({
      name: 'imagemPerfil',
      title: 'Imagem de Perfil',
      type: 'image',
    }),
    defineField({
      name: 'ativo',
      title: 'Ativo',
      type: 'boolean',
    }),
    defineField({
      name: 'endereco',
      title: 'Endereço',
      type: 'object',
      fields: [
        defineField({
          name: 'rua',
          type: 'string',
        }),
        defineField({
          name: 'cidade',
          type: 'string',
        }),
        defineField({
          name: 'estado',
          type: 'string',
        }),
        defineField({
          name: 'cep',
          type: 'string',
        }),
      ],
    }),
  ],
})
