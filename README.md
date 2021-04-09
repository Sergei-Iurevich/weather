[![codecov](https://codecov.io/gh/Sergei-Iurevich/weather/branch/dev/graph/badge.svg?token=KCZZBDZQD2)](https://codecov.io/gh/Sergei-Iurevich/weather)
![](https://github.com/Sergei-Iurevich/weather/actions/workflows/sanity-check.yml/badge.svg)

# App "Weather"

Цель: В задании тренируются навыки:

- работы с тестовыми системами
- использование базового синтаксиса js
- публикация кода с помощью сервиса githubpages

## Описание:

- при открытии страницы пользователь видит погоду (город, температуру и иконку) в своей местности (для получения прогноза погоды используйте https://openweathermap.org/current)
- он может ввести имя города в поле ввода и увидеть погоду в выбранном городе
- введенные города сохраняются у пользователя в браузере, так что он видит последние 10 городов, где он смотрел погоду
- при клике по строчке города в списке он видит погоду в выбранном городе
- кроме информации о погоде покажите в центре страницы карту для введенного адреса (используйте Google Maps Statis API https://developers.google.com/maps/documentation/maps-static/start )

## Libraries used

- Webpack
- Jest
- Prettier + ESLint
