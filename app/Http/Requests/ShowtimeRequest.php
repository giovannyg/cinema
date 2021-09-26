<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Log;
use Illuminate\Foundation\Http\FormRequest;

class ShowtimeRequest extends FormRequest
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
        return [
            'time' => "required|date_format:H:i:s|unique:showtimes" . (($this->id) ? ",time,{$this->id}" : ''),
        ];
    }

    public function messages() {
      return [
        'time.required' => 'El campo turno es requerido',
        'time.unique' => 'Ya existe un turno igual.',
        'time.date_format' => 'El campo turno debe tener un formato time',
      ];
    }
}
