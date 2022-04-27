declare type InternalState = null | false | CompleteState | { success: false, error: string };

declare type CompleteState = { info: YTDL.Info, success: true };
