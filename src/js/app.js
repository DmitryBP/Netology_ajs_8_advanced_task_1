/*
Легенда
Игрок может выбирать персонажей в команду на конкретный раунд исходя из их текущего состояния,
уровня и стратегии игры. Нам необходимо не позволять ему добавлять в команду
несколько раз одного и того же персонажа.
Описание
Создайте класс Team с методами add, addAll и toArray. Класс должен хранить
 данные о персонажах команды в поле типа Set:

class Team {
    constructor() {
        this.members = new Set();
    }
    ...
}
Метод add должен добавлять выбранного персонажа в команду (объект класса Character).
При этом такой объект уже существует в команде - дублирования
происходить не должно, должна генерироваться ошибка.
Метод addAll должен иметь возможность добавлять произвольное
 количество персонажей (используйте rest-parameters) в команду.
 При этом задвоения быть не должно, ошибка генерироваться не должна.
Метод toArray должен производить конвертацию Set в массив.
Не забудьте написать unit-тесты, которые обеспечивают 100%
 покрытие функций и классов, которые вы тестируете.
 */
import Character from './Character.js';

const cheracterList = [];
const mag = new Character('pendalf', 13);
const hobit = new Character('frodo', 1);

cheracterList.push(mag);
cheracterList.push(hobit);
cheracterList.push(hobit);

console.log(cheracterList);

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(cheracter) {
    if (this.members.has(cheracter)) {
      console.log('err - such a character already exists');
    } else {
      this.members.add(cheracter);
    }
    console.log(this);
  }

  addAll(anyCheracterList) {
    anyCheracterList.forEach((element) => {
      this.members.add(element);
    });
    console.log(this);
  }

  toArray() {
    const arr = [...this.members];
    console.log(arr[0]);
    return arr;
  }
}

const team = new Team();
team.add(mag);
team.addAll(cheracterList);
team.toArray();
