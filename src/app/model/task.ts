export class Task {
  id: number;
  title: string = '';
  description: string = '';
  state: State;
}

export class State {
  id: number = 0;
  name: string = '';
}
