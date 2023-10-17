export type LOGGING_LEVEL = 'WARNING' | 'ERROR' | 'LOG' | 'DEBUG';

export type LogMetadata = {
  opco: string,
  accountType: string,
  appName: string,
  owningEntity: string,
}

export type SplunkMessage = {
  deployment: {
    environment: string
  },
  version: number,
  timestamp: string,
  message: string,
  context: string,
  messageDetail?: string,
  status?: string,
  stack?: string,
  metadata: LogMetadata,
  http?: {
    method?: string,
    url?: string,
    status_code?: number,
    userAgent?: string,
  }
  network_client_ip?: string,
  corelation_id: string,
  trace_id: string,
  span_id: string,
  level: LOGGING_LEVEL
}
