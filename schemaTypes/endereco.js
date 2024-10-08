import { defineField, defineType } from "sanity";

export const enderecoType = defineType({
name: 'endereco',
  title: 'Endereço',
  type: 'object',
  fields: [
    defineField({
      name: 'rua',
      title: 'Rua',
      type: 'string',
    }),
    defineField({
      name: 'numero',
      title: 'Número',
      type: 'string',
    }),
    defineField({
      name: 'bairro',
      title: 'Bairro',
      type: 'string',
    }),
    defineField({
      name: 'cidade',
      title: 'Cidade',
      type: 'string',
    }),
    defineField({
      name: 'estado',
      title: 'Estado',
      type: 'string',
    }),
    defineField({
      name: 'pais',
      title: 'País',
      type: 'string',
    }),
    defineField({
      name: 'cep',
      title: 'CEP',
      type: 'string',
    }),
  ],
})