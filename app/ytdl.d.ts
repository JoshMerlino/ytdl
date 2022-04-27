declare namespace YTDL {
    export interface Info {
    page: string;
    player_response: PlayerResponse;
    response: Response;
    html5player: string;
    formats: InfoFormat[];
    related_videos: RelatedVideo[];
    videoDetails: InfoVideoDetails;
    full: boolean;
}

export interface InfoFormat {
    mimeType: string;
    qualityLabel: null | string;
    bitrate: number;
    audioBitrate: number | null;
    itag: number;
    url: string;
    width?: number;
    height?: number;
    lastModified: string;
    contentLength?: string;
    quality: string;
    fps?: number;
    projectionType: ProjectionType;
    averageBitrate?: number;
    audioQuality?: string;
    approxDurationMs: string;
    audioSampleRate?: string;
    audioChannels?: number;
    hasVideo: boolean;
    hasAudio: boolean;
    container: Container;
    codecs: string;
    videoCodec: null | string;
    audioCodec: null | string;
    isLive: boolean;
    isHLS: boolean;
    isDashMPD: boolean;
    initRange?: Range;
    indexRange?: Range;
    colorInfo?: ColorInfo;
    highReplication?: boolean;
    loudnessDb?: number;
}

export interface ColorInfo {
    primaries: Primaries;
    transferCharacteristics: TransferCharacteristics;
    matrixCoefficients: MatrixCoefficients;
}

export enum MatrixCoefficients {
    ColorMatrixCoefficientsBt709 = "COLOR_MATRIX_COEFFICIENTS_BT709",
}

export enum Primaries {
    ColorPrimariesBt709 = "COLOR_PRIMARIES_BT709",
}

export enum TransferCharacteristics {
    ColorTransferCharacteristicsBt709 = "COLOR_TRANSFER_CHARACTERISTICS_BT709",
}

export enum Container {
    Mp4 = "mp4",
    Webm = "webm",
}

export interface Range {
    start: string;
    end: string;
}

export enum ProjectionType {
    Rectangular = "RECTANGULAR",
}

export interface PlayerResponse {
    responseContext: PlayerResponseResponseContext;
    playabilityStatus: PlayabilityStatus;
    streamingData: StreamingData;
    playbackTracking: PlaybackTracking;
    videoDetails: PlayerResponseVideoDetails;
    annotations: Annotation[];
    playerConfig: PlayerConfig;
    storyboards: Storyboards;
    microformat: Microformat;
    trackingParams: string;
    attestation: Attestation;
    videoQualityPromoSupportedRenderers: VideoQualityPromoSupportedRenderers;
    messages: Message[];
    adPlacements: AdPlacement[];
    frameworkUpdates: PlayerResponseFrameworkUpdates;
}

export interface AdPlacement {
    adPlacementRenderer: AdPlacementRenderer;
}

export interface AdPlacementRenderer {
    config: AdPlacementRendererConfig;
    renderer: Renderer;
    adSlotLoggingData: AdSlotLoggingData;
}

export interface AdSlotLoggingData {
    serializedSlotAdServingDataEntry: string;
}

export interface AdPlacementRendererConfig {
    adPlacementConfig: AdPlacementConfig;
}

export interface AdPlacementConfig {
    kind: string;
    adTimeOffset: AdTimeOffset;
    hideCueRangeMarker: boolean;
}

export interface AdTimeOffset {
    offsetStartMilliseconds: string;
    offsetEndMilliseconds: string;
}

export interface Renderer {
    clientForecastingAdRenderer: ClientForecastingAdRenderer;
}

export interface ClientForecastingAdRenderer {
    impressionUrls: URL[];
}

export interface URL {
    baseUrl: string;
}

export interface Annotation {
    playerAnnotationsExpandedRenderer: PlayerAnnotationsExpandedRenderer;
}

export interface PlayerAnnotationsExpandedRenderer {
    featuredChannel: FeaturedChannel;
    allowSwipeDismiss: boolean;
    annotationId: string;
}

export interface FeaturedChannel {
    startTimeMs: string;
    endTimeMs: string;
    watermark: WatermarkClass;
    trackingParams: string;
    navigationEndpoint: FeaturedChannelNavigationEndpoint;
    channelName: string;
    subscribeButton: FeaturedChannelSubscribeButton;
}

export interface FeaturedChannelNavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: EndpointCommandMetadata;
    browseEndpoint: EndpointBrowseEndpoint;
}

export interface EndpointBrowseEndpoint {
    browseId: string;
}

export interface EndpointCommandMetadata {
    webCommandMetadata: PurpleWebCommandMetadata;
}

export interface PurpleWebCommandMetadata {
    url?: string;
    webPageType?: WebPageType;
    rootVe?: number;
    apiUrl?: PurpleAPIURL;
    sendPost?: boolean;
}

export enum PurpleAPIURL {
    YoutubeiV1Browse = "/youtubei/v1/browse",
    YoutubeiV1Feedback = "/youtubei/v1/feedback",
}

export enum WebPageType {
    WebPageTypeBrowse = "WEB_PAGE_TYPE_BROWSE",
    WebPageTypeChannel = "WEB_PAGE_TYPE_CHANNEL",
    WebPageTypeSearch = "WEB_PAGE_TYPE_SEARCH",
    WebPageTypeUnknown = "WEB_PAGE_TYPE_UNKNOWN",
    WebPageTypeWatch = "WEB_PAGE_TYPE_WATCH",
}

export interface FeaturedChannelSubscribeButton {
    subscribeButtonRenderer: SubscribeButtonRenderer;
}

export interface SubscribeButtonRenderer {
    buttonText: DetailsText;
    subscribed: boolean;
    enabled: boolean;
    type: string;
    channelId: string;
    showPreferences: boolean;
    subscribedButtonText: DetailsText;
    unsubscribedButtonText: DetailsText;
    trackingParams: string;
    unsubscribeButtonText: DetailsText;
    serviceEndpoints: ServiceEndpointElement[];
    subscribeAccessibility: DisabledAccessibilityData;
    unsubscribeAccessibility: DisabledAccessibilityData;
    signInEndpoint: SubscribeButtonRendererSignInEndpoint;
}

export interface DetailsText {
    runs: DetailsTextRun[];
}

export interface DetailsTextRun {
    text: string;
}

export interface ServiceEndpointElement {
    clickTrackingParams: string;
    commandMetadata: AcceptCommandCommandMetadata;
    subscribeEndpoint?: SubscribeEndpoint;
    signalServiceEndpoint?: PurpleSignalServiceEndpoint;
}

export interface AcceptCommandCommandMetadata {
    webCommandMetadata: FluffyWebCommandMetadata;
}

export interface FluffyWebCommandMetadata {
    sendPost: boolean;
    apiUrl?: FluffyAPIURL;
}

export enum FluffyAPIURL {
    YoutubeiV1AccountAccountMenu = "/youtubei/v1/account/account_menu",
    YoutubeiV1BrowseEditPlaylist = "/youtubei/v1/browse/edit_playlist",
    YoutubeiV1Feedback = "/youtubei/v1/feedback",
    YoutubeiV1GetSurvey = "/youtubei/v1/get_survey",
    YoutubeiV1Next = "/youtubei/v1/next",
    YoutubeiV1PlaylistCreate = "/youtubei/v1/playlist/create",
    YoutubeiV1ShareGetSharePanel = "/youtubei/v1/share/get_share_panel",
    YoutubeiV1ShareGetWebPlayerSharePanel = "/youtubei/v1/share/get_web_player_share_panel",
    YoutubeiV1SubscriptionSubscribe = "/youtubei/v1/subscription/subscribe",
    YoutubeiV1SubscriptionUnsubscribe = "/youtubei/v1/subscription/unsubscribe",
}

export interface PurpleSignalServiceEndpoint {
    signal: Signal;
    actions: PurpleAction[];
}

export interface PurpleAction {
    clickTrackingParams: string;
    openPopupAction: PurpleOpenPopupAction;
}

export interface PurpleOpenPopupAction {
    popup: PurplePopup;
    popupType: string;
}

export interface PurplePopup {
    confirmDialogRenderer: ConfirmDialogRenderer;
}

export interface ConfirmDialogRenderer {
    trackingParams: string;
    dialogMessages: DetailsText[];
    confirmButton: A11YSkipNavigationButtonClass;
    cancelButton: A11YSkipNavigationButtonClass;
    primaryIsCancel: boolean;
}

export interface VoiceSearchDialogRenderer {
    placeholderHeader: DetailsText;
    promptHeader: DetailsText;
    exampleQuery1: DetailsText;
    exampleQuery2: DetailsText;
    promptMicrophoneLabel: DetailsText;
    loadingHeader: DetailsText;
    connectionErrorHeader: DetailsText;
    connectionErrorMicrophoneLabel: DetailsText;
    permissionsHeader: DetailsText;
    permissionsSubtext: DetailsText;
    disabledHeader: DetailsText;
    disabledSubtext: DetailsText;
    microphoneButtonAriaLabel: DetailsText;
    exitButton: A11YSkipNavigationButtonClass;
    trackingParams: string;
    microphoneOffPromptHeader: DetailsText;
}

export interface FluffyPopup {
    voiceSearchDialogRenderer: VoiceSearchDialogRenderer;
}

export interface FluffyOpenPopupAction {
    popup: FluffyPopup;
    popupType: string;
}

export interface TentacledAction {
    clickTrackingParams: string;
    openPopupAction: FluffyOpenPopupAction;
}

export interface FluffySignalServiceEndpoint {
    signal: Signal;
    actions: TentacledAction[];
}

export interface ButtonRendererServiceEndpoint {
    clickTrackingParams: string;
    commandMetadata: AcceptCommandCommandMetadata;
    unsubscribeEndpoint?: SubscribeEndpoint;
    signalServiceEndpoint?: FluffySignalServiceEndpoint;
}

export interface A11YSkipNavigationButtonButtonRenderer {
    style: string;
    size: string;
    isDisabled: boolean;
    text?: DetailsText;
    accessibility?: Accessibility;
    trackingParams: string;
    serviceEndpoint?: ButtonRendererServiceEndpoint;
    command?: PurpleCommand;
    icon?: Icon;
    navigationEndpoint?: CurrentVideoEndpointClass;
    accessibilityData?: DisabledAccessibilityData;
    tooltip?: string;
}

export interface A11YSkipNavigationButtonClass {
    buttonRenderer: A11YSkipNavigationButtonButtonRenderer;
}

export enum Signal {
    ClientSignal = "CLIENT_SIGNAL",
}

export interface SubscribeEndpoint {
    channelIds: string[];
    params: string;
}

export interface Accessibility {
    label: string;
}

export interface DisabledAccessibilityData {
    accessibilityData: Accessibility;
}

export interface PurpleCommand {
    clickTrackingParams: string;
    commandMetadata: AcceptCommandCommandMetadata;
    continuationCommand?: ContinuationCommand;
    signalServiceEndpoint?: CommandSignalServiceEndpoint;
}

export interface ContinuationCommand {
    token: string;
    request: string;
}

export interface CommandSignalServiceEndpoint {
    signal: Signal;
    actions: FluffyAction[];
}

export interface FluffyAction {
    clickTrackingParams: string;
    signalAction: SignalAction;
}

export interface SignalAction {
    signal: string;
}

export interface Icon {
    iconType: string;
}

export interface CurrentVideoEndpointClass {
    clickTrackingParams: string;
    commandMetadata: EndpointCommandMetadata;
    watchEndpoint: CurrentVideoEndpointWatchEndpoint;
}

export interface CurrentVideoEndpointWatchEndpoint {
    videoId: string;
    watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig;
}

export interface WatchEndpointSupportedOnesieConfig {
    html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig;
}

export interface Html5PlaybackOnesieConfig {
    commonConfig: CommonConfig;
}

export interface CommonConfig {
    url: string;
}

export interface SubscribeButtonRendererSignInEndpoint {
    clickTrackingParams: string;
    commandMetadata: SignInEndpointCommandMetadata;
}

export interface SignInEndpointCommandMetadata {
    webCommandMetadata: CommonConfig;
}

export interface WatermarkClass {
    thumbnails: ThumbnailElement[];
}

export interface ThumbnailElement {
    url: string;
    width: number;
    height: number;
}

export interface Attestation {
    playerAttestationRenderer: PlayerAttestationRenderer;
}

export interface PlayerAttestationRenderer {
    challenge: string;
    botguardData: BotguardData;
}

export interface BotguardData {
    program: string;
    interpreterSafeUrl: InterpreterSafeURL;
    serverEnvironment: number;
}

export interface InterpreterSafeURL {
    privateDoNotAccessOrElseTrustedResourceUrlWrappedValue: string;
}

export interface PlayerResponseFrameworkUpdates {
    entityBatchUpdate: PurpleEntityBatchUpdate;
}

export interface PurpleEntityBatchUpdate {
    mutations: PurpleMutation[];
    timestamp: Timestamp;
}

export interface PurpleMutation {
    entityKey: string;
    type: string;
    payload: Payload;
}

export interface Payload {
    offlineabilityEntity: OfflineabilityEntity;
}

export interface OfflineabilityEntity {
    key: string;
    addToOfflineButtonState: string;
}

export interface Timestamp {
    seconds: string;
    nanos: number;
}

export interface Message {
    mealbarPromoRenderer: MealbarPromoRenderer;
}

export interface MealbarPromoRenderer {
    messageTexts: DetailsText[];
    actionButton: ActionButtonClass;
    dismissButton: DismissButton;
    triggerCondition: string;
    style: string;
    trackingParams: string;
    impressionEndpoints: AcceptCommand[];
    isVisible: boolean;
    messageTitle: DetailsText;
}

export interface ActionButtonClass {
    buttonRenderer: PurpleButtonRenderer;
}

export interface PurpleButtonRenderer {
    style: string;
    size: string;
    text: DetailsText;
    trackingParams: string;
    command?: FluffyCommand;
    isDisabled?: boolean;
}

export interface FluffyCommand {
    clickTrackingParams: string;
    commandExecutorCommand: PurpleCommandExecutorCommand;
}

export interface PurpleCommandExecutorCommand {
    commands: TentacledCommand[];
}

export interface TentacledCommand {
    clickTrackingParams?: string;
    commandMetadata: EndpointCommandMetadata;
    browseEndpoint?: CommandBrowseEndpoint;
    feedbackEndpoint?: FeedbackEndpoint;
}

export interface CommandBrowseEndpoint {
    browseId: string;
    params: string;
}

export interface FeedbackEndpoint {
    feedbackToken: string;
    uiActions: UIActions;
}

export interface UIActions {
    hideEnclosingContainer: boolean;
}

export interface DismissButton {
    buttonRenderer: FluffyButtonRenderer;
}

export interface FluffyButtonRenderer {
    style: string;
    size: string;
    text: DetailsText;
    trackingParams: string;
    command: StickyCommand;
}

export interface StickyCommand {
    clickTrackingParams: string;
    commandExecutorCommand: FluffyCommandExecutorCommand;
}

export interface FluffyCommandExecutorCommand {
    commands: AcceptCommand[];
}

export interface AcceptCommand {
    clickTrackingParams: string;
    commandMetadata: AcceptCommandCommandMetadata;
    feedbackEndpoint: FeedbackEndpoint;
}

export interface Microformat {
    playerMicroformatRenderer: PlayerMicroformatRenderer;
}

export interface PlayerMicroformatRenderer {
    thumbnail: WatermarkClass;
    embed: Embed;
    title: Description;
    description: Description;
    lengthSeconds: string;
    ownerProfileUrl: string;
    externalChannelId: string;
    isFamilySafe: boolean;
    availableCountries: string[];
    isUnlisted: boolean;
    hasYpcMetadata: boolean;
    viewCount: string;
    category: string;
    publishDate: Date;
    ownerChannelName: string;
    uploadDate: Date;
}

export interface Description {
    simpleText: string;
}

export interface Embed {
    iframeUrl: string;
    flashUrl: string;
    width: number;
    height: number;
    flashSecureUrl: string;
}

export interface PlayabilityStatus {
    status: string;
    playableInEmbed: boolean;
    miniplayer: Miniplayer;
    contextParams: string;
}

export interface Miniplayer {
    miniplayerRenderer: MiniplayerRenderer;
}

export interface MiniplayerRenderer {
    playbackMode: string;
}

export interface PlaybackTracking {
    videostatsPlaybackUrl: URL;
    videostatsDelayplayUrl: URL;
    videostatsWatchtimeUrl: URL;
    ptrackingUrl: URL;
    qoeUrl: URL;
    atrUrl: AtrURL;
    videostatsScheduledFlushWalltimeSeconds: number[];
    videostatsDefaultFlushIntervalSeconds: number;
}

export interface AtrURL {
    baseUrl: string;
    elapsedMediaTimeSeconds: number;
}

export interface PlayerConfig {
    audioConfig: AudioConfig;
    streamSelectionConfig: StreamSelectionConfig;
    mediaCommonConfig: MediaCommonConfig;
    webPlayerConfig: WebPlayerConfig;
}

export interface AudioConfig {
    loudnessDb: number;
    perceptualLoudnessDb: number;
    enablePerFormatLoudness: boolean;
}

export interface MediaCommonConfig {
    dynamicReadaheadConfig: DynamicReadaheadConfig;
}

export interface DynamicReadaheadConfig {
    maxReadAheadMediaTimeMs: number;
    minReadAheadMediaTimeMs: number;
    readAheadGrowthRateMs: number;
}

export interface StreamSelectionConfig {
    maxBitrate: string;
}

export interface WebPlayerConfig {
    webPlayerActionsPorting: WebPlayerActionsPorting;
}

export interface WebPlayerActionsPorting {
    getSharePanelCommand: GetSharePanelCommand;
    subscribeCommand: SubscribeCommand;
    unsubscribeCommand: UnsubscribeCommand;
    addToWatchLaterCommand: AddToWatchLaterCommand;
    removeFromWatchLaterCommand: RemoveFromWatchLaterCommand;
}

export interface AddToWatchLaterCommand {
    clickTrackingParams: string;
    commandMetadata: AcceptCommandCommandMetadata;
    playlistEditEndpoint: AddToWatchLaterCommandPlaylistEditEndpoint;
}

export interface AddToWatchLaterCommandPlaylistEditEndpoint {
    playlistId: PlaylistID;
    actions: StickyAction[];
}

export interface StickyAction {
    addedVideoId: string;
    action: CunningAction;
}

export enum CunningAction {
    ActionAddVideo = "ACTION_ADD_VIDEO",
}

export enum PlaylistID {
    Wl = "WL",
}

export interface GetSharePanelCommand {
    clickTrackingParams: string;
    commandMetadata: AcceptCommandCommandMetadata;
    webPlayerShareEntityServiceEndpoint: WebPlayerShareEntityServiceEndpoint;
}

export interface WebPlayerShareEntityServiceEndpoint {
    serializedShareEntity: string;
}

export interface RemoveFromWatchLaterCommand {
    clickTrackingParams: string;
    commandMetadata: AcceptCommandCommandMetadata;
    playlistEditEndpoint: RemoveFromWatchLaterCommandPlaylistEditEndpoint;
}

export interface RemoveFromWatchLaterCommandPlaylistEditEndpoint {
    playlistId: PlaylistID;
    actions: IndigoAction[];
}

export interface IndigoAction {
    action: MagentaAction;
    removedVideoId: string;
}

export enum MagentaAction {
    ActionRemoveVideoByVideoID = "ACTION_REMOVE_VIDEO_BY_VIDEO_ID",
}

export interface SubscribeCommand {
    clickTrackingParams: string;
    commandMetadata: AcceptCommandCommandMetadata;
    subscribeEndpoint: SubscribeEndpoint;
}

export interface UnsubscribeCommand {
    clickTrackingParams: string;
    commandMetadata: AcceptCommandCommandMetadata;
    unsubscribeEndpoint: SubscribeEndpoint;
}

export interface PlayerResponseResponseContext {
    serviceTrackingParams: ServiceTrackingParam[];
    mainAppWebResponseContext: MainAppWebResponseContext;
    webResponseContextExtensionData: PurpleWebResponseContextExtensionData;
}

export interface MainAppWebResponseContext {
    loggedOut: boolean;
}

export interface ServiceTrackingParam {
    service: string;
    params: Param[];
}

export interface Param {
    key: string;
    value: string;
}

export interface PurpleWebResponseContextExtensionData {
    hasDecorated: boolean;
}

export interface Storyboards {
    playerStoryboardSpecRenderer: PlayerStoryboardSpecRenderer;
}

export interface PlayerStoryboardSpecRenderer {
    spec: string;
}

export interface StreamingData {
    expiresInSeconds: string;
    formats: AdaptiveFormatElement[];
    adaptiveFormats: AdaptiveFormatElement[];
}

export interface AdaptiveFormatElement {
    itag: number;
    url: string;
    mimeType: string;
    bitrate: number;
    width?: number;
    height?: number;
    initRange?: Range;
    indexRange?: Range;
    lastModified: string;
    contentLength?: string;
    quality: string;
    fps?: number;
    qualityLabel?: string;
    projectionType: ProjectionType;
    approxDurationMs: string;
    colorInfo?: ColorInfo;
    highReplication?: boolean;
    audioQuality?: string;
    audioSampleRate?: string;
    audioChannels?: number;
    loudnessDb?: number;
    averageBitrate?: number;
}

export interface PlayerResponseVideoDetails {
    videoId: string;
    title: string;
    lengthSeconds: string;
    keywords: string[];
    channelId: string;
    isOwnerViewing: boolean;
    shortDescription: string;
    isCrawlable: boolean;
    thumbnail: WatermarkClass;
    allowRatings: boolean;
    viewCount: string;
    author: string;
    isPrivate: boolean;
    isUnpluggedCorpus: boolean;
    isLiveContent: boolean;
}

export interface VideoQualityPromoSupportedRenderers {
    videoQualityPromoRenderer: VideoQualityPromoRenderer;
}

export interface VideoQualityPromoRenderer {
    triggerCriteria: TriggerCriteria;
    text: Text;
    endpoint: VideoQualityPromoRendererEndpoint;
    trackingParams: string;
    snackbar: Snackbar;
}

export interface VideoQualityPromoRendererEndpoint {
    clickTrackingParams: string;
    commandMetadata: EndpointCommandMetadata;
    urlEndpoint: URLEndpoint;
}

export interface URLEndpoint {
    url: string;
    target: string;
}

export interface Snackbar {
    notificationActionRenderer: SnackbarNotificationActionRenderer;
}

export interface SnackbarNotificationActionRenderer {
    responseText: DetailsText;
    actionButton: ActionButton;
    trackingParams: string;
}

export interface ActionButton {
    buttonRenderer: TentacledButtonRenderer;
}

export interface TentacledButtonRenderer {
    text: DetailsText;
    navigationEndpoint: VideoQualityPromoRendererEndpoint;
    trackingParams: string;
}

export interface Text {
    runs: PurpleRun[];
}

export interface PurpleRun {
    text: string;
    bold?: boolean;
}

export interface TriggerCriteria {
    connectionWhitelist: string[];
    joinLatencySeconds: number;
    rebufferTimeSeconds: number;
    watchTimeWindowSeconds: number;
    refractorySeconds: number;
}

export interface RelatedVideo {
    id: string;
    title: string;
    published: string;
    author: Author;
    short_view_count_text: string;
    view_count: string;
    length_seconds: number;
    thumbnails: ThumbnailElement[];
    richThumbnails: ThumbnailElement[];
    isLive: boolean;
}

export interface Author {
    id: string;
    name: string;
    user: string;
    channel_url: string;
    user_url: string;
    thumbnails: ThumbnailElement[];
    verified: boolean;
    external_channel_url?: string;
    subscriber_count?: number;
}

export interface Response {
    responseContext: ResponseResponseContext;
    contents: Contents;
    currentVideoEndpoint: CurrentVideoEndpointClass;
    trackingParams: string;
    playerOverlays: PlayerOverlays;
    overlay: Overlay;
    onResponseReceivedEndpoints: OnResponseReceivedEndpoint[];
    engagementPanels: EngagementPanel[];
    topbar: Topbar;
    frameworkUpdates: ResponseFrameworkUpdates;
}

export interface Contents {
    twoColumnWatchNextResults: TwoColumnWatchNextResults;
}

export interface TwoColumnWatchNextResults {
    results: TwoColumnWatchNextResultsResults;
    secondaryResults: TwoColumnWatchNextResultsSecondaryResults;
    autoplay: TwoColumnWatchNextResultsAutoplay;
}

export interface TwoColumnWatchNextResultsAutoplay {
    autoplay: AutoplayAutoplay;
}

export interface AutoplayAutoplay {
    sets: Set[];
    countDownSecs: number;
    trackingParams: string;
}

export interface Set {
    mode: string;
    autoplayVideo: NavigationEndpoint;
}

export interface NavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: EndpointCommandMetadata;
    watchEndpoint: AutoplayVideoWatchEndpoint;
}

export interface AutoplayVideoWatchEndpoint {
    videoId: string;
    params: string;
    playerParams: string;
    watchEndpointSupportedPrefetchConfig: WatchEndpointSupportedPrefetchConfig;
}

export interface WatchEndpointSupportedPrefetchConfig {
    prefetchHintConfig: PrefetchHintConfig;
}

export interface PrefetchHintConfig {
    prefetchPriority: number;
    countdownUiRelativeSecondsPrefetchCondition: number;
}

export interface TwoColumnWatchNextResultsResults {
    results: ResultsResults;
}

export interface ResultsResults {
    contents: ResultsContent[];
    trackingParams: string;
}

export interface ResultsContent {
    videoPrimaryInfoRenderer?: VideoPrimaryInfoRenderer;
    videoSecondaryInfoRenderer?: VideoSecondaryInfoRenderer;
    itemSectionRenderer?: ItemSectionRenderer;
}

export interface ItemSectionRenderer {
    contents: ItemSectionRendererContent[];
    trackingParams: string;
    sectionIdentifier: string;
    targetId: string;
}

export interface ItemSectionRendererContent {
    continuationItemRenderer: ContentContinuationItemRenderer;
}

export interface ContentContinuationItemRenderer {
    trigger: string;
    continuationEndpoint: ContinuationEndpoint;
}

export interface ContinuationEndpoint {
    clickTrackingParams: string;
    commandMetadata: AcceptCommandCommandMetadata;
    continuationCommand: ContinuationCommand;
}

export interface VideoPrimaryInfoRenderer {
    title: DetailsText;
    viewCount: ViewCount;
    videoActions: VideoActions;
    trackingParams: string;
    superTitleLink: SuperTitleLink;
    dateText: Description;
}

export interface SuperTitleLink {
    runs: SuperTitleLinkRun[];
}

export interface SuperTitleLinkRun {
    text: string;
    navigationEndpoint?: PurpleNavigationEndpoint;
    loggingDirectives?: LoggingDirectives;
}

export interface LoggingDirectives {
    trackingParams: string;
    visibility: Visibility;
}

export interface Visibility {
    types: string;
}

export interface PurpleNavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: EndpointCommandMetadata;
    browseEndpoint: CommandBrowseEndpoint;
}

export interface VideoActions {
    menuRenderer: VideoActionsMenuRenderer;
}

export interface VideoActionsMenuRenderer {
    items: PurpleItem[];
    trackingParams: string;
    topLevelButtons: TopLevelButton[];
    accessibility: DisabledAccessibilityData;
}

export interface PurpleItem {
    menuNavigationItemRenderer: MenuItemRenderer;
}

export interface MenuItemRenderer {
    text: DetailsText;
    icon: Icon;
    navigationEndpoint?: MenuNavigationItemRendererNavigationEndpoint;
    trackingParams: string;
    serviceEndpoint?: MenuNavigationItemRendererServiceEndpoint;
}

export interface MenuNavigationItemRendererNavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: DefaultNavigationEndpointCommandMetadata;
    modalEndpoint: PurpleModalEndpoint;
}

export interface DefaultNavigationEndpointCommandMetadata {
    webCommandMetadata: TentacledWebCommandMetadata;
}

export interface TentacledWebCommandMetadata {
    ignoreNavigation: boolean;
}

export interface PurpleModalEndpoint {
    modal: PurpleModal;
}

export interface PurpleModal {
    modalWithTitleAndButtonRenderer: PurpleModalWithTitleAndButtonRenderer;
}

export interface PurpleModalWithTitleAndButtonRenderer {
    title: DetailsText;
    content: DetailsText;
    button: PurpleButton;
}

export interface PurpleButton {
    buttonRenderer: StickyButtonRenderer;
}

export interface StickyButtonRenderer {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Description;
    navigationEndpoint: FluffyNavigationEndpoint;
    trackingParams: string;
}

export interface FluffyNavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: EndpointCommandMetadata;
    signInEndpoint: AdsEngagementPanelContentRenderer;
}

export interface AdsEngagementPanelContentRenderer {
    hack: boolean;
}

export interface MenuNavigationItemRendererServiceEndpoint {
    clickTrackingParams: string;
    commandMetadata: OnResponseReceivedEndpointCommandMetadata;
    signalServiceEndpoint: TentacledSignalServiceEndpoint;
}

export interface OnResponseReceivedEndpointCommandMetadata {
    webCommandMetadata: StickyWebCommandMetadata;
}

export interface StickyWebCommandMetadata {
    sendPost: boolean;
}

export interface TentacledSignalServiceEndpoint {
    signal: Signal;
    actions: IndecentAction[];
}

export interface IndecentAction {
    clickTrackingParams: string;
    addToPlaylistCommand?: AddToPlaylistCommand;
    openPopupAction?: TentacledOpenPopupAction;
}

export interface AddToPlaylistCommand {
    openMiniplayer: boolean;
    openListPanel: boolean;
    videoId: string;
    listType: ListType;
    onCreateListCommand: OnCreateListCommand;
    videoIds: string[];
}

export enum ListType {
    PlaylistEditListTypeQueue = "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
}

export interface OnCreateListCommand {
    clickTrackingParams: string;
    commandMetadata: AcceptCommandCommandMetadata;
    createPlaylistServiceEndpoint: CreatePlaylistServiceEndpoint;
}

export interface CreatePlaylistServiceEndpoint {
    videoIds: string[];
    params: Params;
}

export enum Params {
    CAQ3D = "CAQ%3D",
}

export interface TentacledOpenPopupAction {
    popup: TentacledPopup;
    popupType: PopupType;
}

export interface TentacledPopup {
    notificationActionRenderer: PopupNotificationActionRenderer;
}

export interface PopupNotificationActionRenderer {
    responseText: Description;
    trackingParams: string;
}

export enum PopupType {
    Toast = "TOAST",
}

export interface TopLevelButton {
    toggleButtonRenderer?: ToggleButtonRenderer;
    buttonRenderer?: TopLevelButtonButtonRenderer;
    downloadButtonRenderer?: DownloadButtonRenderer;
}

export interface TopLevelButtonButtonRenderer {
    style: string;
    size: string;
    isDisabled: boolean;
    text: DetailsText;
    serviceEndpoint?: ServiceEndpointClass;
    icon: Icon;
    tooltip: string;
    trackingParams: string;
    accessibilityData: DisabledAccessibilityData;
    accessibility?: Accessibility;
    command?: IndigoCommand;
}

export interface IndigoCommand {
    clickTrackingParams: string;
    commandMetadata: DefaultNavigationEndpointCommandMetadata;
    modalEndpoint: CommandModalEndpoint;
}

export interface CommandModalEndpoint {
    modal: FluffyModal;
}

export interface FluffyModal {
    modalWithTitleAndButtonRenderer: FluffyModalWithTitleAndButtonRenderer;
}

export interface FluffyModalWithTitleAndButtonRenderer {
    title: DetailsText;
    content: DetailsText;
    button: FluffyButton;
}

export interface FluffyButton {
    buttonRenderer: IndigoButtonRenderer;
}

export interface IndigoButtonRenderer {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Description;
    navigationEndpoint: TentacledNavigationEndpoint;
    trackingParams: string;
}

export interface TentacledNavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: EndpointCommandMetadata;
    signInEndpoint: PurpleSignInEndpoint;
}

export interface PurpleSignInEndpoint {
    nextEndpoint: CurrentVideoEndpointClass;
    idamTag: string;
}

export interface ServiceEndpointClass {
    clickTrackingParams: string;
    commandMetadata: AcceptCommandCommandMetadata;
    shareEntityServiceEndpoint: ShareEntityServiceEndpoint;
}

export interface ShareEntityServiceEndpoint {
    serializedShareEntity: string;
    commands: ShareEntityServiceEndpointCommand[];
}

export interface ShareEntityServiceEndpointCommand {
    clickTrackingParams: string;
    openPopupAction: CommandOpenPopupAction;
}

export interface CommandOpenPopupAction {
    popup: StickyPopup;
    popupType: string;
    beReused: boolean;
}

export interface StickyPopup {
    unifiedSharePanelRenderer: UnifiedSharePanelRenderer;
}

export interface UnifiedSharePanelRenderer {
    trackingParams: string;
    showLoadingSpinner: boolean;
}

export interface DownloadButtonRenderer {
    trackingParams: string;
    style: string;
    size: string;
    targetId: string;
    command: DownloadButtonRendererCommand;
}

export interface DownloadButtonRendererCommand {
    clickTrackingParams: string;
    offlineVideoEndpoint: OfflineVideoEndpoint;
}

export interface OfflineVideoEndpoint {
    videoId: string;
    onAddCommand: OnAddCommand;
}

export interface OnAddCommand {
    clickTrackingParams: string;
    getDownloadActionCommand: GetDownloadActionCommand;
}

export interface GetDownloadActionCommand {
    videoId: string;
    params: string;
}

export interface ToggleButtonRenderer {
    style: StyleClass;
    isToggled: boolean;
    isDisabled: boolean;
    defaultIcon: Icon;
    defaultText: ShortViewCountText;
    toggledText: ShortViewCountText;
    accessibility: Accessibility;
    trackingParams: string;
    defaultTooltip: string;
    toggledTooltip: string;
    toggledStyle: StyleClass;
    defaultNavigationEndpoint: DefaultNavigationEndpoint;
    accessibilityData: DisabledAccessibilityData;
    toggleButtonSupportedData: ToggleButtonSupportedData;
    targetId: string;
}

export interface DefaultNavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: DefaultNavigationEndpointCommandMetadata;
    modalEndpoint: DefaultNavigationEndpointModalEndpoint;
}

export interface DefaultNavigationEndpointModalEndpoint {
    modal: TentacledModal;
}

export interface TentacledModal {
    modalWithTitleAndButtonRenderer: TentacledModalWithTitleAndButtonRenderer;
}

export interface TentacledModalWithTitleAndButtonRenderer {
    title: Description;
    content: Description;
    button: FluffyButton;
}

export interface ShortViewCountText {
    accessibility?: DisabledAccessibilityData;
    simpleText: string;
}

export interface StyleClass {
    styleType: string;
}

export interface ToggleButtonSupportedData {
    toggleButtonIdData: ToggleButtonIDData;
}

export interface ToggleButtonIDData {
    id: string;
}

export interface ViewCount {
    videoViewCountRenderer: VideoViewCountRenderer;
}

export interface VideoViewCountRenderer {
    viewCount: Description;
    shortViewCount: Description;
}

export interface VideoSecondaryInfoRenderer {
    owner: Owner;
    description: SuperTitleLink;
    subscribeButton: VideoSecondaryInfoRendererSubscribeButton;
    metadataRowContainer: MetadataRowContainer;
    showMoreText: Description;
    showLessText: Description;
    trackingParams: string;
    defaultExpanded: boolean;
    descriptionCollapsedLines: number;
    showMoreCommand: ShowMoreCommand;
    showLessCommand: ShowLessCommand;
}

export interface MetadataRowContainer {
    metadataRowContainerRenderer: MetadataRowContainerRenderer;
}

export interface MetadataRowContainerRenderer {
    collapsedItemCount: number;
    trackingParams: string;
}

export interface Owner {
    videoOwnerRenderer: VideoOwnerRenderer;
}

export interface VideoOwnerRenderer {
    thumbnail: WatermarkClass;
    title: Byline;
    subscriptionButton: DismissStrategy;
    navigationEndpoint: VideoOwnerRendererNavigationEndpoint;
    subscriberCountText: ShortViewCountText;
    trackingParams: string;
}

export interface VideoOwnerRendererNavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: EndpointCommandMetadata;
    browseEndpoint: PurpleBrowseEndpoint;
}

export interface PurpleBrowseEndpoint {
    browseId: string;
    canonicalBaseUrl: string;
}

export interface DismissStrategy {
    type: string;
}

export interface Byline {
    runs: BylineRun[];
}

export interface BylineRun {
    text: string;
    navigationEndpoint: VideoOwnerRendererNavigationEndpoint;
}

export interface ShowLessCommand {
    clickTrackingParams: string;
    changeEngagementPanelVisibilityAction: ChangeEngagementPanelVisibilityAction;
}

export interface ChangeEngagementPanelVisibilityAction {
    targetId: string;
    visibility: string;
}

export interface ShowMoreCommand {
    clickTrackingParams: string;
    commandExecutorCommand: ShowMoreCommandCommandExecutorCommand;
}

export interface ShowMoreCommandCommandExecutorCommand {
    commands: IndecentCommand[];
}

export interface IndecentCommand {
    clickTrackingParams: string;
    changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction;
    scrollToEngagementPanelCommand?: ScrollToEngagementPanelCommand;
}

export interface ScrollToEngagementPanelCommand {
    targetId: string;
}

export interface VideoSecondaryInfoRendererSubscribeButton {
    buttonRenderer: SubscribeButtonButtonRenderer;
}

export interface SubscribeButtonButtonRenderer {
    style: string;
    size: string;
    isDisabled: boolean;
    text: DetailsText;
    navigationEndpoint: StickyNavigationEndpoint;
    trackingParams: string;
    targetId: string;
}

export interface StickyNavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: DefaultNavigationEndpointCommandMetadata;
    modalEndpoint: FluffyModalEndpoint;
}

export interface FluffyModalEndpoint {
    modal: StickyModal;
}

export interface StickyModal {
    modalWithTitleAndButtonRenderer: StickyModalWithTitleAndButtonRenderer;
}

export interface StickyModalWithTitleAndButtonRenderer {
    title: Description;
    content: Description;
    button: TentacledButton;
}

export interface TentacledButton {
    buttonRenderer: IndecentButtonRenderer;
}

export interface IndecentButtonRenderer {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Description;
    navigationEndpoint: IndigoNavigationEndpoint;
    trackingParams: string;
}

export interface IndigoNavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: EndpointCommandMetadata;
    signInEndpoint: FluffySignInEndpoint;
}

export interface FluffySignInEndpoint {
    nextEndpoint: CurrentVideoEndpointClass;
    continueAction: string;
    idamTag: string;
}

export interface TwoColumnWatchNextResultsSecondaryResults {
    secondaryResults: SecondaryResultsSecondaryResults;
}

export interface SecondaryResultsSecondaryResults {
    results: SecondaryResultsResult[];
    trackingParams: string;
    targetId: string;
}

export interface SecondaryResultsResult {
    compactVideoRenderer?: CompactVideoRenderer;
    continuationItemRenderer?: ResultContinuationItemRenderer;
}

export interface CompactVideoRenderer {
    videoId: string;
    thumbnail: WatermarkClass;
    title: ShortViewCountText;
    longBylineText: Byline;
    publishedTimeText: Description;
    viewCountText: Description;
    lengthText: ShortViewCountText;
    navigationEndpoint: CompactVideoRendererNavigationEndpoint;
    shortBylineText: Byline;
    channelThumbnail: WatermarkClass;
    trackingParams: string;
    shortViewCountText: ShortViewCountText;
    menu: Menu;
    thumbnailOverlays: CompactVideoRendererThumbnailOverlay[];
    accessibility: DisabledAccessibilityData;
    richThumbnail?: RichThumbnail;
    badges?: Badge[];
}

export interface Badge {
    metadataBadgeRenderer: MetadataBadgeRenderer;
}

export interface MetadataBadgeRenderer {
    style: string;
    label: string;
    trackingParams: string;
}

export interface Menu {
    menuRenderer: MenuMenuRenderer;
}

export interface MenuMenuRenderer {
    items: FluffyItem[];
    trackingParams: string;
    accessibility: DisabledAccessibilityData;
    targetId?: string;
}

export interface FluffyItem {
    menuServiceItemRenderer: MenuItemRenderer;
}

export interface CompactVideoRendererNavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: EndpointCommandMetadata;
    watchEndpoint: PurpleWatchEndpoint;
}

export interface PurpleWatchEndpoint {
    videoId: string;
    nofollow: boolean;
    watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig;
}

export interface RichThumbnail {
    movingThumbnailRenderer: MovingThumbnailRenderer;
}

export interface MovingThumbnailRenderer {
    enableHoveredLogging: boolean;
    enableOverlay: boolean;
    movingThumbnailDetails?: MovingThumbnailDetails;
}

export interface MovingThumbnailDetails {
    thumbnails: ThumbnailElement[];
    logAsMovingThumbnail: boolean;
}

export interface CompactVideoRendererThumbnailOverlay {
    thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer;
    thumbnailOverlayToggleButtonRenderer?: ThumbnailOverlayToggleButtonRenderer;
    thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer;
}

export interface ThumbnailOverlayNowPlayingRenderer {
    text: DetailsText;
}

export interface ThumbnailOverlayTimeStatusRenderer {
    text: ShortViewCountText;
    style: StyleEnum;
}

export enum StyleEnum {
    Default = "DEFAULT",
}

export interface ThumbnailOverlayToggleButtonRenderer {
    isToggled?: boolean;
    untoggledIcon: Icon;
    toggledIcon: Icon;
    untoggledTooltip: UntoggledTooltip;
    toggledTooltip: ToggledTooltip;
    untoggledServiceEndpoint: UntoggledServiceEndpoint;
    toggledServiceEndpoint?: RemoveFromWatchLaterCommand;
    untoggledAccessibility: DisabledAccessibilityData;
    toggledAccessibility: DisabledAccessibilityData;
    trackingParams: string;
}

export enum ToggledTooltip {
    Added = "Added",
}

export interface UntoggledServiceEndpoint {
    clickTrackingParams: string;
    commandMetadata: AcceptCommandCommandMetadata;
    playlistEditEndpoint?: AddToWatchLaterCommandPlaylistEditEndpoint;
    signalServiceEndpoint?: UntoggledServiceEndpointSignalServiceEndpoint;
}

export interface UntoggledServiceEndpointSignalServiceEndpoint {
    signal: Signal;
    actions: HilariousAction[];
}

export interface HilariousAction {
    clickTrackingParams: string;
    addToPlaylistCommand: AddToPlaylistCommand;
}

export enum UntoggledTooltip {
    AddToQueue = "Add to queue",
    WatchLater = "Watch later",
}

export interface ResultContinuationItemRenderer {
    trigger: string;
    continuationEndpoint: ContinuationEndpoint;
    button: A11YSkipNavigationButtonClass;
}

export interface EngagementPanel {
    engagementPanelSectionListRenderer: EngagementPanelSectionListRenderer;
}

export interface EngagementPanelSectionListRenderer {
    content: EngagementPanelSectionListRendererContent;
    targetId: string;
    visibility: string;
    loggingDirectives: LoggingDirectives;
    panelIdentifier?: string;
    header?: Header;
    veType?: number;
}

export interface EngagementPanelSectionListRendererContent {
    adsEngagementPanelContentRenderer?: AdsEngagementPanelContentRenderer;
    structuredDescriptionContentRenderer?: StructuredDescriptionContentRenderer;
}

export interface StructuredDescriptionContentRenderer {
    items: StructuredDescriptionContentRendererItem[];
}

export interface StructuredDescriptionContentRendererItem {
    expandableVideoDescriptionBodyRenderer: ExpandableVideoDescriptionBodyRenderer;
}

export interface ExpandableVideoDescriptionBodyRenderer {
    descriptionBodyText: SuperTitleLink;
    showMoreText: Description;
    showLessText: Description;
}

export interface Header {
    engagementPanelTitleHeaderRenderer: EngagementPanelTitleHeaderRenderer;
}

export interface EngagementPanelTitleHeaderRenderer {
    title: Description;
    visibilityButton: VisibilityButton;
    trackingParams: string;
}

export interface VisibilityButton {
    buttonRenderer: VisibilityButtonButtonRenderer;
}

export interface VisibilityButtonButtonRenderer {
    icon: Icon;
    trackingParams: string;
    accessibilityData: DisabledAccessibilityData;
    command: HilariousCommand;
}

export interface HilariousCommand {
    clickTrackingParams: string;
    commandExecutorCommand: TentacledCommandExecutorCommand;
}

export interface TentacledCommandExecutorCommand {
    commands: AmbitiousCommand[];
}

export interface AmbitiousCommand {
    clickTrackingParams: string;
    changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction;
    updateToggleButtonStateCommand?: UpdateToggleButtonStateCommand;
}

export interface UpdateToggleButtonStateCommand {
    toggled: boolean;
    buttonId: string;
}

export interface ResponseFrameworkUpdates {
    entityBatchUpdate: FluffyEntityBatchUpdate;
}

export interface FluffyEntityBatchUpdate {
    mutations: FluffyMutation[];
    timestamp: Timestamp;
}

export interface FluffyMutation {
    entityKey: string;
    type: string;
    options: Options;
}

export interface Options {
    persistenceOption: string;
}

export interface OnResponseReceivedEndpoint {
    clickTrackingParams: string;
    commandMetadata: OnResponseReceivedEndpointCommandMetadata;
    signalServiceEndpoint: CommandSignalServiceEndpoint;
}

export interface Overlay {
    tooltipRenderer: TooltipRenderer;
}

export interface TooltipRenderer {
    promoConfig: PromoConfig;
    targetId: string;
    text: DetailsText;
    detailsText: DetailsText;
    dismissButton: DismissButton;
    suggestedPosition: DismissStrategy;
    dismissStrategy: DismissStrategy;
    dwellTimeMs: string;
    trackingParams: string;
}

export interface PromoConfig {
    promoId: string;
    impressionEndpoints: AcceptCommand[];
    acceptCommand: AcceptCommand;
    dismissCommand: AcceptCommand;
}

export interface PlayerOverlays {
    playerOverlayRenderer: PlayerOverlayRenderer;
}

export interface PlayerOverlayRenderer {
    endScreen: EndScreen;
    autoplay: PlayerOverlayRendererAutoplay;
    shareButton: ShareButton;
    addToMenu: AddToMenu;
    videoDetails: PlayerOverlayRendererVideoDetails;
    autonavToggle: AutonavToggle;
}

export interface AddToMenu {
    menuRenderer: AddToMenuMenuRenderer;
}

export interface AddToMenuMenuRenderer {
    trackingParams: string;
}

export interface AutonavToggle {
    autoplaySwitchButtonRenderer: AutoplaySwitchButtonRenderer;
}

export interface AutoplaySwitchButtonRenderer {
    enabledAccessibilityData: DisabledAccessibilityData;
    disabledAccessibilityData: DisabledAccessibilityData;
    trackingParams: string;
}

export interface PlayerOverlayRendererAutoplay {
    playerOverlayAutoplayRenderer: PlayerOverlayAutoplayRenderer;
}

export interface PlayerOverlayAutoplayRenderer {
    title: Description;
    videoTitle: ShortViewCountText;
    byline: Byline;
    pauseText: Description;
    background: WatermarkClass;
    countDownSecs: number;
    cancelButton: CancelButton;
    nextButton: A11YSkipNavigationButtonClass;
    trackingParams: string;
    closeButton: A11YSkipNavigationButtonClass;
    thumbnailOverlays: PlayerOverlayAutoplayRendererThumbnailOverlay[];
    preferImmediateRedirect: boolean;
    videoId: string;
    publishedTimeText: Description;
    webShowNewAutonavCountdown: boolean;
    webShowBigThumbnailEndscreen: boolean;
    shortViewCountText: ShortViewCountText;
    countDownSecsForFullscreen: number;
}

export interface CancelButton {
    buttonRenderer: HilariousButtonRenderer;
}

export interface HilariousButtonRenderer {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Description;
    accessibility: Accessibility;
    trackingParams: string;
    command: CunningCommand;
}

export interface CunningCommand {
    clickTrackingParams: string;
    commandMetadata: AcceptCommandCommandMetadata;
    getSurveyCommand: GetSurveyCommand;
}

export interface GetSurveyCommand {
    endpoint: GetSurveyCommandEndpoint;
    action: string;
}

export interface GetSurveyCommandEndpoint {
    watch: AdsEngagementPanelContentRenderer;
}

export interface PlayerOverlayAutoplayRendererThumbnailOverlay {
    thumbnailOverlayTimeStatusRenderer: ThumbnailOverlayTimeStatusRenderer;
}

export interface EndScreen {
    watchNextEndScreenRenderer: WatchNextEndScreenRenderer;
}

export interface WatchNextEndScreenRenderer {
    results: WatchNextEndScreenRendererResult[];
    title: Description;
    trackingParams: string;
}

export interface WatchNextEndScreenRendererResult {
    endScreenVideoRenderer: EndScreenVideoRenderer;
}

export interface EndScreenVideoRenderer {
    videoId: string;
    thumbnail: WatermarkClass;
    title: ShortViewCountText;
    shortBylineText: Byline;
    lengthText: ShortViewCountText;
    lengthInSeconds: number;
    navigationEndpoint: CurrentVideoEndpointClass;
    trackingParams: string;
    shortViewCountText: ShortViewCountText;
    publishedTimeText: Description;
    thumbnailOverlays: EndScreenVideoRendererThumbnailOverlay[];
}

export interface EndScreenVideoRendererThumbnailOverlay {
    thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer;
    thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer;
}

export interface ShareButton {
    buttonRenderer: ShareButtonButtonRenderer;
}

export interface ShareButtonButtonRenderer {
    style: string;
    size: string;
    isDisabled: boolean;
    icon: Icon;
    navigationEndpoint: ServiceEndpointClass;
    tooltip: string;
    trackingParams: string;
}

export interface PlayerOverlayRendererVideoDetails {
    playerOverlayVideoDetailsRenderer: PlayerOverlayVideoDetailsRenderer;
}

export interface PlayerOverlayVideoDetailsRenderer {
    title: Description;
    subtitle: DetailsText;
}

export interface ResponseResponseContext {
    serviceTrackingParams: ServiceTrackingParam[];
    mainAppWebResponseContext: MainAppWebResponseContext;
    webResponseContextExtensionData: FluffyWebResponseContextExtensionData;
}

export interface FluffyWebResponseContextExtensionData {
    ytConfigData: YtConfigData;
    webPrefetchData: WebPrefetchData;
    hasDecorated: boolean;
}

export interface WebPrefetchData {
    navigationEndpoints: NavigationEndpoint[];
}

export interface YtConfigData {
    visitorData: string;
    rootVisualElementType: number;
}

export interface Topbar {
    desktopTopbarRenderer: DesktopTopbarRenderer;
}

export interface DesktopTopbarRenderer {
    logo: Logo;
    searchbox: Searchbox;
    trackingParams: string;
    topbarButtons: TopbarButton[];
    hotkeyDialog: HotkeyDialog;
    backButton: BackButtonClass;
    forwardButton: BackButtonClass;
    a11ySkipNavigationButton: A11YSkipNavigationButtonClass;
    voiceSearchButton: A11YSkipNavigationButtonClass;
}

export interface BackButtonClass {
    buttonRenderer: BackButtonButtonRenderer;
}

export interface BackButtonButtonRenderer {
    trackingParams: string;
    command: OnResponseReceivedEndpoint;
}

export interface HotkeyDialog {
    hotkeyDialogRenderer: HotkeyDialogRenderer;
}

export interface HotkeyDialogRenderer {
    title: DetailsText;
    sections: HotkeyDialogRendererSection[];
    dismissButton: ActionButtonClass;
    trackingParams: string;
}

export interface HotkeyDialogRendererSection {
    hotkeyDialogSectionRenderer: HotkeyDialogSectionRenderer;
}

export interface HotkeyDialogSectionRenderer {
    title: DetailsText;
    options: Option[];
}

export interface Option {
    hotkeyDialogSectionOptionRenderer: HotkeyDialogSectionOptionRenderer;
}

export interface HotkeyDialogSectionOptionRenderer {
    label: DetailsText;
    hotkey: string;
    hotkeyAccessibilityLabel?: DisabledAccessibilityData;
}

export interface Logo {
    topbarLogoRenderer: TopbarLogoRenderer;
}

export interface TopbarLogoRenderer {
    iconImage: Icon;
    tooltipText: DetailsText;
    endpoint: FeaturedChannelNavigationEndpoint;
    trackingParams: string;
    overrideEntityKey: string;
}

export interface Searchbox {
    fusionSearchboxRenderer: FusionSearchboxRenderer;
}

export interface FusionSearchboxRenderer {
    icon: Icon;
    placeholderText: DetailsText;
    config: FusionSearchboxRendererConfig;
    trackingParams: string;
    searchEndpoint: FusionSearchboxRendererSearchEndpoint;
    clearButton: A11YSkipNavigationButtonClass;
}

export interface FusionSearchboxRendererConfig {
    webSearchboxConfig: WebSearchboxConfig;
}

export interface WebSearchboxConfig {
    requestLanguage: string;
    requestDomain: string;
    hasOnscreenKeyboard: boolean;
    focusSearchbox: boolean;
}

export interface FusionSearchboxRendererSearchEndpoint {
    clickTrackingParams: string;
    commandMetadata: EndpointCommandMetadata;
    searchEndpoint: SearchEndpointSearchEndpoint;
}

export interface SearchEndpointSearchEndpoint {
    query: string;
}

export interface TopbarButton {
    topbarMenuButtonRenderer?: TopbarMenuButtonRenderer;
    buttonRenderer?: TopbarButtonButtonRenderer;
}

export interface TopbarButtonButtonRenderer {
    style: string;
    size: string;
    text: DetailsText;
    icon: Icon;
    navigationEndpoint: IndecentNavigationEndpoint;
    trackingParams: string;
    targetId: string;
}

export interface IndecentNavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: EndpointCommandMetadata;
    signInEndpoint: TentacledSignInEndpoint;
}

export interface TentacledSignInEndpoint {
    idamTag: string;
}

export interface TopbarMenuButtonRenderer {
    icon: Icon;
    menuRenderer?: TopbarMenuButtonRendererMenuRenderer;
    trackingParams: string;
    accessibility: DisabledAccessibilityData;
    tooltip: string;
    style: string;
    targetId?: string;
    menuRequest?: MenuRequest;
}

export interface TopbarMenuButtonRendererMenuRenderer {
    multiPageMenuRenderer: MenuRendererMultiPageMenuRenderer;
}

export interface MenuRendererMultiPageMenuRenderer {
    sections: MultiPageMenuRendererSection[];
    trackingParams: string;
    style: string;
}

export interface MultiPageMenuRendererSection {
    multiPageMenuSectionRenderer: MultiPageMenuSectionRenderer;
}

export interface MultiPageMenuSectionRenderer {
    items: MultiPageMenuSectionRendererItem[];
    trackingParams: string;
}

export interface MultiPageMenuSectionRendererItem {
    compactLinkRenderer: CompactLinkRenderer;
}

export interface CompactLinkRenderer {
    icon: Icon;
    title: DetailsText;
    navigationEndpoint: VideoQualityPromoRendererEndpoint;
    trackingParams: string;
}

export interface MenuRequest {
    clickTrackingParams: string;
    commandMetadata: AcceptCommandCommandMetadata;
    signalServiceEndpoint: MenuRequestSignalServiceEndpoint;
}

export interface MenuRequestSignalServiceEndpoint {
    signal: string;
    actions: AmbitiousAction[];
}

export interface AmbitiousAction {
    clickTrackingParams: string;
    openPopupAction: StickyOpenPopupAction;
}

export interface StickyOpenPopupAction {
    popup: IndigoPopup;
    popupType: string;
    beReused: boolean;
}

export interface IndigoPopup {
    multiPageMenuRenderer: PopupMultiPageMenuRenderer;
}

export interface PopupMultiPageMenuRenderer {
    trackingParams: string;
    style: string;
    showLoadingSpinner: boolean;
}

export interface InfoVideoDetails {
    embed: Embed;
    title: string;
    description: string;
    lengthSeconds: string;
    ownerProfileUrl: string;
    externalChannelId: string;
    isFamilySafe: boolean;
    availableCountries: string[];
    isUnlisted: boolean;
    hasYpcMetadata: boolean;
    viewCount: string;
    category: string;
    publishDate: Date;
    ownerChannelName: string;
    uploadDate: Date;
    videoId: string;
    keywords: string[];
    channelId: string;
    isOwnerViewing: boolean;
    isCrawlable: boolean;
    allowRatings: boolean;
    author: Author;
    isPrivate: boolean;
    isUnpluggedCorpus: boolean;
    isLiveContent: boolean;
    likes: number;
    dislikes: null;
    age_restricted: boolean;
    video_url: string;
    storyboards: Storyboard[];
    chapters: any[];
    thumbnails: ThumbnailElement[];
}

export interface Storyboard {
    templateUrl: string;
    thumbnailWidth: number;
    thumbnailHeight: number;
    thumbnailCount: number;
    interval: number;
    columns: number;
    rows: number;
    storyboardCount: number;
}

}
