export interface IEvent {
  offers: {
    type: string;
    url: string;
    status: string;
  }[];
  venue: {
    country: string;
    city: string;
    latitude: string | number;
    name: string;
    location: string;
    region: string;
    longitude: string | number;
  };
  artist: {
    thumb_url: string;
    mbid: string | number;
    facebook_page_url: string;
    image_url: string;
    tracker_count: number;
    tracking: [];
    upcoming_event_count: number;
    url: string;
    support_url: string;
    name: string;
    options: {
      display_listen_unit: boolean;
    };
    links: {
      type: string;
      url: string;
    }[];
    id: string | number;
  };
  festival_datetime_display_rule: string;
  description: string;
  lineup: string[];
  festival_start_date: string;
  bandsintown_plus: boolean;
  title: string;
  artist_id: string | number;
  url: string;
  datetime: string;
  on_sale_datetime: string;
  id: string | number;
  festival_end_date: string;
}
