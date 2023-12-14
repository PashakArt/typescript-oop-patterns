export class AppState {
    public counter = 0;

    private static instance: AppState;

    private constructor() {}

    static getInstance(): AppState {
        if (!AppState.instance) {
            AppState.instance = new AppState();
        }

        return AppState.instance;
    }
}
