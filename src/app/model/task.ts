export class Task {
  id: number;
  title: String;
  description: String;
  state: State;
}

export class State {
  id: number = 0;
  name: string = '';
}
