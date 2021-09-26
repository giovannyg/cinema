<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MovieRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'name' => 'required|max:160',
            'release_date' => 'date'
        ];
        if ($this->isMethod('post')) $rules['image'] = 'image';

        return $rules;
    }

    public function messages()
    {
      return [
        'name.required' => 'El campo nombre es requerido.',
        'name.max' => 'El campo nombre debe ser de máximo 160 caracteres.',
        'release_date.date' => 'El campo fecha de publicación es requerido y debe tener un formato fecha.',
        'image.image' => 'El campo imagen es requerido y debe ser un archivo de imagen.',
      ];
    }
}
