<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => 'test',
            'discription' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit tempus lacus, bibendum dignissim nulla ultricies eu. Nam non finibus quam, ut auctor mauris. Ut sed quam et odio fermentum dictum eu eu eros. Vestibulum nec velit tortor. Etiam sollicitudin massa sed luctus varius. Aenean bibendum odio risus, ut consectetur arcu ornare non. Quisque viverra malesuada ligula, et rutrum arcu malesuada eu. Suspendisse fermentum enim non scelerisque vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse et velit blandit, pretium tortor ullamcorper, luctus ligula. Aenean sed mi convallis felis congue accumsan. Aliquam quis quam nisi. Morbi in urna sed quam commodo imperdiet in a justo. ',
            'price' => '100',
            'category' => 'springkussen'
        ];
    }
}
