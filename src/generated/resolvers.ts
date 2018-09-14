import { GraphQLResolveInfo } from 'graphql'

export interface ITypeMap {
  Context: any
  PAYMENT_PROVIDER: any
  PLACE_SIZES: any
  NOTIFICATION_TYPE: any
  CURRENCY: any
  MutationType: any

  QueryParent: any
  MutationParent: any
  SubscriptionParent: any
  ViewerParent: any
  AuthPayloadParent: any
  MutationResultParent: any
  ExperiencesByCityParent: any
  HomeParent: any
  ReservationParent: any
  ExperienceParent: any
  ReviewParent: any
  NeighbourhoodParent: any
  LocationParent: any
  PictureParent: any
  CityParent: any
  ExperienceCategoryParent: any
  UserParent: any
  PaymentAccountParent: any
  PlaceParent: any
  BookingParent: any
  NotificationParent: any
  PaymentParent: any
  PaypalInformationParent: any
  CreditCardInformationParent: any
  MessageParent: any
  PricingParent: any
  PlaceViewsParent: any
  GuestRequirementsParent: any
  PoliciesParent: any
  HouseRulesParent: any
  AmenitiesParent: any
  CitySubscriptionPayloadParent: any
  CityPreviousValuesParent: any
}

export namespace QueryResolvers {
  export type TopExperiencesResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ExperienceParent'][] | Promise<T['ExperienceParent'][]>

  export type TopHomesResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['HomeParent'][] | Promise<T['HomeParent'][]>

  export interface ArgsHomesInPriceRange {
    min: number
    max: number
  }

  export type HomesInPriceRangeResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: ArgsHomesInPriceRange,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['HomeParent'][] | Promise<T['HomeParent'][]>

  export type TopReservationsResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ReservationParent'][] | Promise<T['ReservationParent'][]>

  export type FeaturedDestinationsResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['NeighbourhoodParent'][] | Promise<T['NeighbourhoodParent'][]>

  export interface ArgsExperiencesByCity {
    cities: string[]
  }

  export type ExperiencesByCityResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: ArgsExperiencesByCity,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ExperiencesByCityParent'][] | Promise<T['ExperiencesByCityParent'][]>

  export type ViewerResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ViewerParent'] | null | Promise<T['ViewerParent'] | null>

  export type MyLocationResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['LocationParent'] | null | Promise<T['LocationParent'] | null>

  export interface Type<T extends ITypeMap> {
    topExperiences: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ExperienceParent'][] | Promise<T['ExperienceParent'][]>
    topHomes: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['HomeParent'][] | Promise<T['HomeParent'][]>
    homesInPriceRange: (
      parent: T['QueryParent'],
      args: ArgsHomesInPriceRange,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['HomeParent'][] | Promise<T['HomeParent'][]>
    topReservations: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ReservationParent'][] | Promise<T['ReservationParent'][]>
    featuredDestinations: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['NeighbourhoodParent'][] | Promise<T['NeighbourhoodParent'][]>
    experiencesByCity: (
      parent: T['QueryParent'],
      args: ArgsExperiencesByCity,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) =>
      | T['ExperiencesByCityParent'][]
      | Promise<T['ExperiencesByCityParent'][]>
    viewer: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ViewerParent'] | null | Promise<T['ViewerParent'] | null>
    myLocation: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['LocationParent'] | null | Promise<T['LocationParent'] | null>
  }
}

export namespace MutationResolvers {
  export interface ArgsSignup {
    email: string
    password: string
    firstName: string
    lastName: string
    phone: string
  }

  export type SignupResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsSignup,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['AuthPayloadParent'] | Promise<T['AuthPayloadParent']>

  export interface ArgsLogin {
    email: string
    password: string
  }

  export type LoginResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsLogin,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['AuthPayloadParent'] | Promise<T['AuthPayloadParent']>

  export interface ArgsAddPaymentMethod {
    cardNumber: string
    expiresOnMonth: number
    expiresOnYear: number
    securityCode: string
    firstName: string
    lastName: string
    postalCode: string
    country: string
  }

  export type AddPaymentMethodResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsAddPaymentMethod,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['MutationResultParent'] | Promise<T['MutationResultParent']>

  export interface ArgsBook {
    placeId: string
    checkIn: string
    checkOut: string
    numGuests: number
  }

  export type BookResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsBook,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['MutationResultParent'] | Promise<T['MutationResultParent']>

  export interface ArgsAddLocationToUser {
    location: T['LocationCreateInputParent'] | null
  }

  export type AddLocationToUserResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsAddLocationToUser,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) =>
    | T['MutationResultParent']
    | null
    | Promise<T['MutationResultParent'] | null>

  export interface Type<T extends ITypeMap> {
    signup: (
      parent: T['MutationParent'],
      args: ArgsSignup,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['AuthPayloadParent'] | Promise<T['AuthPayloadParent']>
    login: (
      parent: T['MutationParent'],
      args: ArgsLogin,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['AuthPayloadParent'] | Promise<T['AuthPayloadParent']>
    addPaymentMethod: (
      parent: T['MutationParent'],
      args: ArgsAddPaymentMethod,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['MutationResultParent'] | Promise<T['MutationResultParent']>
    book: (
      parent: T['MutationParent'],
      args: ArgsBook,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['MutationResultParent'] | Promise<T['MutationResultParent']>
    addLocationToUser: (
      parent: T['MutationParent'],
      args: ArgsAddLocationToUser,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) =>
      | T['MutationResultParent']
      | null
      | Promise<T['MutationResultParent'] | null>
  }
}

export namespace SubscriptionResolvers {
  export type CityResolver<T extends ITypeMap> = (
    parent: T['SubscriptionParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) =>
    | T['CitySubscriptionPayloadParent']
    | null
    | Promise<T['CitySubscriptionPayloadParent'] | null>

  export interface Type<T extends ITypeMap> {
    city: (
      parent: T['SubscriptionParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) =>
      | T['CitySubscriptionPayloadParent']
      | null
      | Promise<T['CitySubscriptionPayloadParent'] | null>
  }
}

export namespace ViewerResolvers {
  export type MeResolver<T extends ITypeMap> = (
    parent: T['ViewerParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['UserParent'] | Promise<T['UserParent']>

  export type BookingsResolver<T extends ITypeMap> = (
    parent: T['ViewerParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['BookingParent'][] | Promise<T['BookingParent'][]>

  export interface Type<T extends ITypeMap> {
    me: (
      parent: T['ViewerParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['UserParent'] | Promise<T['UserParent']>
    bookings: (
      parent: T['ViewerParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['BookingParent'][] | Promise<T['BookingParent'][]>
  }
}

export namespace AuthPayloadResolvers {
  export type TokenResolver<T extends ITypeMap> = (
    parent: T['AuthPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type UserResolver<T extends ITypeMap> = (
    parent: T['AuthPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['UserParent'] | Promise<T['UserParent']>

  export interface Type<T extends ITypeMap> {
    token: (
      parent: T['AuthPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    user: (
      parent: T['AuthPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['UserParent'] | Promise<T['UserParent']>
  }
}

export namespace MutationResultResolvers {
  export type SuccessResolver<T extends ITypeMap> = (
    parent: T['MutationResultParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export interface Type<T extends ITypeMap> {
    success: (
      parent: T['MutationResultParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
  }
}

export namespace ExperiencesByCityResolvers {
  export type ExperiencesResolver<T extends ITypeMap> = (
    parent: T['ExperiencesByCityParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ExperienceParent'][] | Promise<T['ExperienceParent'][]>

  export type CityResolver<T extends ITypeMap> = (
    parent: T['ExperiencesByCityParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['CityParent'] | Promise<T['CityParent']>

  export interface Type<T extends ITypeMap> {
    experiences: (
      parent: T['ExperiencesByCityParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ExperienceParent'][] | Promise<T['ExperienceParent'][]>
    city: (
      parent: T['ExperiencesByCityParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['CityParent'] | Promise<T['CityParent']>
  }
}

export namespace HomeResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['HomeParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type NameResolver<T extends ITypeMap> = (
    parent: T['HomeParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>

  export type DescriptionResolver<T extends ITypeMap> = (
    parent: T['HomeParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type NumRatingsResolver<T extends ITypeMap> = (
    parent: T['HomeParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type AvgRatingResolver<T extends ITypeMap> = (
    parent: T['HomeParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null | Promise<number | null>

  export interface ArgsPictures {
    first: number | null
  }

  export type PicturesResolver<T extends ITypeMap> = (
    parent: T['HomeParent'],
    args: ArgsPictures,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PictureParent'][] | Promise<T['PictureParent'][]>

  export type PerNightResolver<T extends ITypeMap> = (
    parent: T['HomeParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['HomeParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    name: (
      parent: T['HomeParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>
    description: (
      parent: T['HomeParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    numRatings: (
      parent: T['HomeParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    avgRating: (
      parent: T['HomeParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null | Promise<number | null>
    pictures: (
      parent: T['HomeParent'],
      args: ArgsPictures,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PictureParent'][] | Promise<T['PictureParent'][]>
    perNight: (
      parent: T['HomeParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
  }
}

export namespace ReservationResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type TitleResolver<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type AvgPricePerPersonResolver<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type PicturesResolver<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PictureParent'][] | Promise<T['PictureParent'][]>

  export type LocationResolver<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['LocationParent'] | Promise<T['LocationParent']>

  export type IsCuratedResolver<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type SlugResolver<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type PopularityResolver<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    title: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    avgPricePerPerson: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    pictures: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PictureParent'][] | Promise<T['PictureParent'][]>
    location: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['LocationParent'] | Promise<T['LocationParent']>
    isCurated: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    slug: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    popularity: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
  }
}

export namespace ExperienceResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type CategoryResolver<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) =>
    | T['ExperienceCategoryParent']
    | null
    | Promise<T['ExperienceCategoryParent'] | null>

  export type TitleResolver<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type LocationResolver<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['LocationParent'] | Promise<T['LocationParent']>

  export type PricePerPersonResolver<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type ReviewsResolver<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ReviewParent'][] | Promise<T['ReviewParent'][]>

  export type PreviewResolver<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PictureParent'] | Promise<T['PictureParent']>

  export type PopularityResolver<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    category: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) =>
      | T['ExperienceCategoryParent']
      | null
      | Promise<T['ExperienceCategoryParent'] | null>
    title: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    location: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['LocationParent'] | Promise<T['LocationParent']>
    pricePerPerson: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    reviews: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ReviewParent'][] | Promise<T['ReviewParent'][]>
    preview: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PictureParent'] | Promise<T['PictureParent']>
    popularity: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
  }
}

export namespace ReviewResolvers {
  export type AccuracyResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type CheckInResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type CleanlinessResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type CommunicationResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type IdResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type LocationResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type StarsResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type TextResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type ValueResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export interface Type<T extends ITypeMap> {
    accuracy: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    checkIn: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    cleanliness: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    communication: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    createdAt: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    id: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    location: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    stars: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    text: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    value: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
  }
}

export namespace NeighbourhoodResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type NameResolver<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type SlugResolver<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type HomePreviewResolver<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PictureParent'] | null | Promise<T['PictureParent'] | null>

  export type CityResolver<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['CityParent'] | Promise<T['CityParent']>

  export type FeaturedResolver<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type PopularityResolver<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    name: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    slug: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    homePreview: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PictureParent'] | null | Promise<T['PictureParent'] | null>
    city: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['CityParent'] | Promise<T['CityParent']>
    featured: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    popularity: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
  }
}

export namespace LocationResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['LocationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type LatResolver<T extends ITypeMap> = (
    parent: T['LocationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type LngResolver<T extends ITypeMap> = (
    parent: T['LocationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type AddressResolver<T extends ITypeMap> = (
    parent: T['LocationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>

  export type DirectionsResolver<T extends ITypeMap> = (
    parent: T['LocationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['LocationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    lat: (
      parent: T['LocationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    lng: (
      parent: T['LocationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    address: (
      parent: T['LocationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>
    directions: (
      parent: T['LocationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>
  }
}

export namespace PictureResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['PictureParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type UrlResolver<T extends ITypeMap> = (
    parent: T['PictureParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['PictureParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    url: (
      parent: T['PictureParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
  }
}

export namespace CityResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['CityParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type NameResolver<T extends ITypeMap> = (
    parent: T['CityParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['CityParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    name: (
      parent: T['CityParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
  }
}

export namespace ExperienceCategoryResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['ExperienceCategoryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type MainColorResolver<T extends ITypeMap> = (
    parent: T['ExperienceCategoryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type NameResolver<T extends ITypeMap> = (
    parent: T['ExperienceCategoryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type ExperienceResolver<T extends ITypeMap> = (
    parent: T['ExperienceCategoryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ExperienceParent'] | null | Promise<T['ExperienceParent'] | null>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['ExperienceCategoryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    mainColor: (
      parent: T['ExperienceCategoryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    name: (
      parent: T['ExperienceCategoryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    experience: (
      parent: T['ExperienceCategoryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ExperienceParent'] | null | Promise<T['ExperienceParent'] | null>
  }
}

export namespace UserResolvers {
  export type BookingsResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['BookingParent'][] | Promise<T['BookingParent'][]>

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type EmailResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type FirstNameResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type HostingExperiencesResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ExperienceParent'][] | Promise<T['ExperienceParent'][]>

  export type IdResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type IsSuperHostResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type LastNameResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type LocationResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['LocationParent'] | null | Promise<T['LocationParent'] | null>

  export type NotificationsResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['NotificationParent'][] | Promise<T['NotificationParent'][]>

  export type OwnedPlacesResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PlaceParent'][] | Promise<T['PlaceParent'][]>

  export type PaymentAccountResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) =>
    | T['PaymentAccountParent'][]
    | null
    | Promise<T['PaymentAccountParent'][] | null>

  export type PhoneResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type ProfilePictureResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PictureParent'] | null | Promise<T['PictureParent'] | null>

  export type ReceivedMessagesResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['MessageParent'][] | Promise<T['MessageParent'][]>

  export type ResponseRateResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null | Promise<number | null>

  export type ResponseTimeResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null | Promise<number | null>

  export type SentMessagesResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['MessageParent'][] | Promise<T['MessageParent'][]>

  export type UpdatedAtResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type TokenResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export interface Type<T extends ITypeMap> {
    bookings: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['BookingParent'][] | Promise<T['BookingParent'][]>
    createdAt: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    email: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    firstName: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    hostingExperiences: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ExperienceParent'][] | Promise<T['ExperienceParent'][]>
    id: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    isSuperHost: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    lastName: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    location: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['LocationParent'] | null | Promise<T['LocationParent'] | null>
    notifications: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['NotificationParent'][] | Promise<T['NotificationParent'][]>
    ownedPlaces: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PlaceParent'][] | Promise<T['PlaceParent'][]>
    paymentAccount: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) =>
      | T['PaymentAccountParent'][]
      | null
      | Promise<T['PaymentAccountParent'][] | null>
    phone: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    profilePicture: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PictureParent'] | null | Promise<T['PictureParent'] | null>
    receivedMessages: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['MessageParent'][] | Promise<T['MessageParent'][]>
    responseRate: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null | Promise<number | null>
    responseTime: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null | Promise<number | null>
    sentMessages: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['MessageParent'][] | Promise<T['MessageParent'][]>
    updatedAt: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    token: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
  }
}

export namespace PaymentAccountResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type TypeResolver<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PAYMENT_PROVIDER'] | null | Promise<T['PAYMENT_PROVIDER'] | null>

  export type UserResolver<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['UserParent'] | Promise<T['UserParent']>

  export type PaymentsResolver<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PaymentParent'][] | Promise<T['PaymentParent'][]>

  export type PaypalResolver<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) =>
    | T['PaypalInformationParent']
    | null
    | Promise<T['PaypalInformationParent'] | null>

  export type CreditcardResolver<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) =>
    | T['CreditCardInformationParent']
    | null
    | Promise<T['CreditCardInformationParent'] | null>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    createdAt: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    type: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PAYMENT_PROVIDER'] | null | Promise<T['PAYMENT_PROVIDER'] | null>
    user: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['UserParent'] | Promise<T['UserParent']>
    payments: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PaymentParent'][] | Promise<T['PaymentParent'][]>
    paypal: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) =>
      | T['PaypalInformationParent']
      | null
      | Promise<T['PaypalInformationParent'] | null>
    creditcard: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) =>
      | T['CreditCardInformationParent']
      | null
      | Promise<T['CreditCardInformationParent'] | null>
  }
}

export namespace PlaceResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type NameResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>

  export type SizeResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PLACE_SIZES'] | null | Promise<T['PLACE_SIZES'] | null>

  export type ShortDescriptionResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type DescriptionResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type SlugResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type MaxGuestsResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type NumBedroomsResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type NumBedsResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type NumBathsResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type ReviewsResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ReviewParent'][] | Promise<T['ReviewParent'][]>

  export type AmenitiesResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['AmenitiesParent'] | Promise<T['AmenitiesParent']>

  export type HostResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['UserParent'] | Promise<T['UserParent']>

  export type PricingResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PricingParent'] | Promise<T['PricingParent']>

  export type LocationResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['LocationParent'] | Promise<T['LocationParent']>

  export type ViewsResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PlaceViewsParent'] | Promise<T['PlaceViewsParent']>

  export type GuestRequirementsResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) =>
    | T['GuestRequirementsParent']
    | null
    | Promise<T['GuestRequirementsParent'] | null>

  export type PoliciesResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PoliciesParent'] | null | Promise<T['PoliciesParent'] | null>

  export type HouseRulesResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['HouseRulesParent'] | null | Promise<T['HouseRulesParent'] | null>

  export type BookingsResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['BookingParent'][] | Promise<T['BookingParent'][]>

  export type PicturesResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PictureParent'][] | Promise<T['PictureParent'][]>

  export type PopularityResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    name: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>
    size: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PLACE_SIZES'] | null | Promise<T['PLACE_SIZES'] | null>
    shortDescription: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    description: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    slug: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    maxGuests: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    numBedrooms: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    numBeds: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    numBaths: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    reviews: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ReviewParent'][] | Promise<T['ReviewParent'][]>
    amenities: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['AmenitiesParent'] | Promise<T['AmenitiesParent']>
    host: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['UserParent'] | Promise<T['UserParent']>
    pricing: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PricingParent'] | Promise<T['PricingParent']>
    location: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['LocationParent'] | Promise<T['LocationParent']>
    views: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PlaceViewsParent'] | Promise<T['PlaceViewsParent']>
    guestRequirements: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) =>
      | T['GuestRequirementsParent']
      | null
      | Promise<T['GuestRequirementsParent'] | null>
    policies: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PoliciesParent'] | null | Promise<T['PoliciesParent'] | null>
    houseRules: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['HouseRulesParent'] | null | Promise<T['HouseRulesParent'] | null>
    bookings: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['BookingParent'][] | Promise<T['BookingParent'][]>
    pictures: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PictureParent'][] | Promise<T['PictureParent'][]>
    popularity: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
  }
}

export namespace BookingResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['BookingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['BookingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type BookeeResolver<T extends ITypeMap> = (
    parent: T['BookingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['UserParent'] | Promise<T['UserParent']>

  export type PlaceResolver<T extends ITypeMap> = (
    parent: T['BookingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PlaceParent'] | Promise<T['PlaceParent']>

  export type StartDateResolver<T extends ITypeMap> = (
    parent: T['BookingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type EndDateResolver<T extends ITypeMap> = (
    parent: T['BookingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type PaymentResolver<T extends ITypeMap> = (
    parent: T['BookingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PaymentParent'] | Promise<T['PaymentParent']>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['BookingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    createdAt: (
      parent: T['BookingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    bookee: (
      parent: T['BookingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['UserParent'] | Promise<T['UserParent']>
    place: (
      parent: T['BookingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PlaceParent'] | Promise<T['PlaceParent']>
    startDate: (
      parent: T['BookingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    endDate: (
      parent: T['BookingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    payment: (
      parent: T['BookingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PaymentParent'] | Promise<T['PaymentParent']>
  }
}

export namespace NotificationResolvers {
  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['NotificationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type IdResolver<T extends ITypeMap> = (
    parent: T['NotificationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type LinkResolver<T extends ITypeMap> = (
    parent: T['NotificationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type ReadDateResolver<T extends ITypeMap> = (
    parent: T['NotificationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type TypeResolver<T extends ITypeMap> = (
    parent: T['NotificationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['NOTIFICATION_TYPE'] | null | Promise<T['NOTIFICATION_TYPE'] | null>

  export type UserResolver<T extends ITypeMap> = (
    parent: T['NotificationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['UserParent'] | Promise<T['UserParent']>

  export interface Type<T extends ITypeMap> {
    createdAt: (
      parent: T['NotificationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    id: (
      parent: T['NotificationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    link: (
      parent: T['NotificationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    readDate: (
      parent: T['NotificationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    type: (
      parent: T['NotificationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['NOTIFICATION_TYPE'] | null | Promise<T['NOTIFICATION_TYPE'] | null>
    user: (
      parent: T['NotificationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['UserParent'] | Promise<T['UserParent']>
  }
}

export namespace PaymentResolvers {
  export type BookingResolver<T extends ITypeMap> = (
    parent: T['PaymentParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['BookingParent'] | Promise<T['BookingParent']>

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['PaymentParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type IdResolver<T extends ITypeMap> = (
    parent: T['PaymentParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type PaymentMethodResolver<T extends ITypeMap> = (
    parent: T['PaymentParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PaymentAccountParent'] | Promise<T['PaymentAccountParent']>

  export type ServiceFeeResolver<T extends ITypeMap> = (
    parent: T['PaymentParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export interface Type<T extends ITypeMap> {
    booking: (
      parent: T['PaymentParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['BookingParent'] | Promise<T['BookingParent']>
    createdAt: (
      parent: T['PaymentParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    id: (
      parent: T['PaymentParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    paymentMethod: (
      parent: T['PaymentParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PaymentAccountParent'] | Promise<T['PaymentAccountParent']>
    serviceFee: (
      parent: T['PaymentParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
  }
}

export namespace PaypalInformationResolvers {
  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['PaypalInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type EmailResolver<T extends ITypeMap> = (
    parent: T['PaypalInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type IdResolver<T extends ITypeMap> = (
    parent: T['PaypalInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type PaymentAccountResolver<T extends ITypeMap> = (
    parent: T['PaypalInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PaymentAccountParent'] | Promise<T['PaymentAccountParent']>

  export interface Type<T extends ITypeMap> {
    createdAt: (
      parent: T['PaypalInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    email: (
      parent: T['PaypalInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    id: (
      parent: T['PaypalInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    paymentAccount: (
      parent: T['PaypalInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PaymentAccountParent'] | Promise<T['PaymentAccountParent']>
  }
}

export namespace CreditCardInformationResolvers {
  export type CardNumberResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type CountryResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type ExpiresOnMonthResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type ExpiresOnYearResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type FirstNameResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type IdResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type LastNameResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type PaymentAccountResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) =>
    | T['PaymentAccountParent']
    | null
    | Promise<T['PaymentAccountParent'] | null>

  export type PostalCodeResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type SecurityCodeResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export interface Type<T extends ITypeMap> {
    cardNumber: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    country: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    createdAt: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    expiresOnMonth: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    expiresOnYear: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    firstName: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    id: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    lastName: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    paymentAccount: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) =>
      | T['PaymentAccountParent']
      | null
      | Promise<T['PaymentAccountParent'] | null>
    postalCode: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    securityCode: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
  }
}

export namespace MessageResolvers {
  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['MessageParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type DeliveredAtResolver<T extends ITypeMap> = (
    parent: T['MessageParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type IdResolver<T extends ITypeMap> = (
    parent: T['MessageParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type ReadAtResolver<T extends ITypeMap> = (
    parent: T['MessageParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export interface Type<T extends ITypeMap> {
    createdAt: (
      parent: T['MessageParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    deliveredAt: (
      parent: T['MessageParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    id: (
      parent: T['MessageParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    readAt: (
      parent: T['MessageParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
  }
}

export namespace PricingResolvers {
  export type AverageMonthlyResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type AverageWeeklyResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type BasePriceResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type CleaningFeeResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null | Promise<number | null>

  export type CurrencyResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['CURRENCY'] | null | Promise<T['CURRENCY'] | null>

  export type ExtraGuestsResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null | Promise<number | null>

  export type IdResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type MonthlyDiscountResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null | Promise<number | null>

  export type PerNightResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type SecurityDepositResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null | Promise<number | null>

  export type SmartPricingResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type WeekendPricingResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null | Promise<number | null>

  export type WeeklyDiscountResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null | Promise<number | null>

  export interface Type<T extends ITypeMap> {
    averageMonthly: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    averageWeekly: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    basePrice: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    cleaningFee: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null | Promise<number | null>
    currency: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['CURRENCY'] | null | Promise<T['CURRENCY'] | null>
    extraGuests: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null | Promise<number | null>
    id: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    monthlyDiscount: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null | Promise<number | null>
    perNight: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    securityDeposit: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null | Promise<number | null>
    smartPricing: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    weekendPricing: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null | Promise<number | null>
    weeklyDiscount: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null | Promise<number | null>
  }
}

export namespace PlaceViewsResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['PlaceViewsParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type LastWeekResolver<T extends ITypeMap> = (
    parent: T['PlaceViewsParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['PlaceViewsParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    lastWeek: (
      parent: T['PlaceViewsParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
  }
}

export namespace GuestRequirementsResolvers {
  export type GovIssuedIdResolver<T extends ITypeMap> = (
    parent: T['GuestRequirementsParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type GuestTripInformationResolver<T extends ITypeMap> = (
    parent: T['GuestRequirementsParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type IdResolver<T extends ITypeMap> = (
    parent: T['GuestRequirementsParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type RecommendationsFromOtherHostsResolver<T extends ITypeMap> = (
    parent: T['GuestRequirementsParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export interface Type<T extends ITypeMap> {
    govIssuedId: (
      parent: T['GuestRequirementsParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    guestTripInformation: (
      parent: T['GuestRequirementsParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    id: (
      parent: T['GuestRequirementsParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    recommendationsFromOtherHosts: (
      parent: T['GuestRequirementsParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
  }
}

export namespace PoliciesResolvers {
  export type CheckInEndTimeResolver<T extends ITypeMap> = (
    parent: T['PoliciesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type CheckInStartTimeResolver<T extends ITypeMap> = (
    parent: T['PoliciesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type CheckoutTimeResolver<T extends ITypeMap> = (
    parent: T['PoliciesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['PoliciesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type IdResolver<T extends ITypeMap> = (
    parent: T['PoliciesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type UpdatedAtResolver<T extends ITypeMap> = (
    parent: T['PoliciesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export interface Type<T extends ITypeMap> {
    checkInEndTime: (
      parent: T['PoliciesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    checkInStartTime: (
      parent: T['PoliciesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    checkoutTime: (
      parent: T['PoliciesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    createdAt: (
      parent: T['PoliciesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    id: (
      parent: T['PoliciesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    updatedAt: (
      parent: T['PoliciesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
  }
}

export namespace HouseRulesResolvers {
  export type AdditionalRulesResolver<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type IdResolver<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type PartiesAndEventsAllowedResolver<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | null | Promise<boolean | null>

  export type PetsAllowedResolver<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | null | Promise<boolean | null>

  export type SmokingAllowedResolver<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | null | Promise<boolean | null>

  export type SuitableForChildrenResolver<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | null | Promise<boolean | null>

  export type SuitableForInfantsResolver<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | null | Promise<boolean | null>

  export type UpdatedAtResolver<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export interface Type<T extends ITypeMap> {
    additionalRules: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>
    createdAt: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    id: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    partiesAndEventsAllowed: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | null | Promise<boolean | null>
    petsAllowed: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | null | Promise<boolean | null>
    smokingAllowed: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | null | Promise<boolean | null>
    suitableForChildren: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | null | Promise<boolean | null>
    suitableForInfants: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | null | Promise<boolean | null>
    updatedAt: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
  }
}

export namespace AmenitiesResolvers {
  export type AirConditioningResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type BabyBathResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type BabyMonitorResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type BabysitterRecommendationsResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type BathtubResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type BreakfastResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type BuzzerWirelessIntercomResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type CableTvResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type ChangingTableResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type ChildrensBooksAndToysResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type ChildrensDinnerwareResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type CribResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type DoormanResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type DryerResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type ElevatorResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type EssentialsResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type FamilyKidFriendlyResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type FreeParkingOnPremisesResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type FreeParkingOnStreetResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type GymResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type HairDryerResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type HangersResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type HeatingResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type HotTubResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type IdResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type IndoorFireplaceResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type InternetResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type IronResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type KitchenResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type LaptopFriendlyWorkspaceResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type PaidParkingOffPremisesResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type PetsAllowedResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type PoolResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type PrivateEntranceResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type ShampooResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type SmokingAllowedResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type SuitableForEventsResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type TvResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type WasherResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type WheelchairAccessibleResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type WirelessInternetResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export interface Type<T extends ITypeMap> {
    airConditioning: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    babyBath: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    babyMonitor: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    babysitterRecommendations: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    bathtub: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    breakfast: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    buzzerWirelessIntercom: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    cableTv: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    changingTable: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    childrensBooksAndToys: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    childrensDinnerware: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    crib: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    doorman: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    dryer: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    elevator: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    essentials: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    familyKidFriendly: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    freeParkingOnPremises: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    freeParkingOnStreet: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    gym: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    hairDryer: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    hangers: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    heating: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    hotTub: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    id: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    indoorFireplace: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    internet: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    iron: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    kitchen: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    laptopFriendlyWorkspace: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    paidParkingOffPremises: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    petsAllowed: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    pool: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    privateEntrance: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    shampoo: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    smokingAllowed: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    suitableForEvents: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    tv: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    washer: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    wheelchairAccessible: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    wirelessInternet: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
  }
}

export namespace CitySubscriptionPayloadResolvers {
  export type MutationResolver<T extends ITypeMap> = (
    parent: T['CitySubscriptionPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['MutationType'] | Promise<T['MutationType']>

  export type NodeResolver<T extends ITypeMap> = (
    parent: T['CitySubscriptionPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['CityParent'] | null | Promise<T['CityParent'] | null>

  export type UpdatedFieldsResolver<T extends ITypeMap> = (
    parent: T['CitySubscriptionPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string[] | Promise<string[]>

  export type PreviousValuesResolver<T extends ITypeMap> = (
    parent: T['CitySubscriptionPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) =>
    | T['CityPreviousValuesParent']
    | null
    | Promise<T['CityPreviousValuesParent'] | null>

  export interface Type<T extends ITypeMap> {
    mutation: (
      parent: T['CitySubscriptionPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['MutationType'] | Promise<T['MutationType']>
    node: (
      parent: T['CitySubscriptionPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['CityParent'] | null | Promise<T['CityParent'] | null>
    updatedFields: (
      parent: T['CitySubscriptionPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string[] | Promise<string[]>
    previousValues: (
      parent: T['CitySubscriptionPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) =>
      | T['CityPreviousValuesParent']
      | null
      | Promise<T['CityPreviousValuesParent'] | null>
  }
}

export namespace CityPreviousValuesResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['CityPreviousValuesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type NameResolver<T extends ITypeMap> = (
    parent: T['CityPreviousValuesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['CityPreviousValuesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    name: (
      parent: T['CityPreviousValuesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
  }
}

export interface IResolvers<T extends ITypeMap> {
  Query: QueryResolvers.Type<T>
  Mutation: MutationResolvers.Type<T>
  Subscription: SubscriptionResolvers.Type<T>
  Viewer: ViewerResolvers.Type<T>
  AuthPayload: AuthPayloadResolvers.Type<T>
  MutationResult: MutationResultResolvers.Type<T>
  ExperiencesByCity: ExperiencesByCityResolvers.Type<T>
  Home: HomeResolvers.Type<T>
  Reservation: ReservationResolvers.Type<T>
  Experience: ExperienceResolvers.Type<T>
  Review: ReviewResolvers.Type<T>
  Neighbourhood: NeighbourhoodResolvers.Type<T>
  Location: LocationResolvers.Type<T>
  Picture: PictureResolvers.Type<T>
  City: CityResolvers.Type<T>
  ExperienceCategory: ExperienceCategoryResolvers.Type<T>
  User: UserResolvers.Type<T>
  PaymentAccount: PaymentAccountResolvers.Type<T>
  Place: PlaceResolvers.Type<T>
  Booking: BookingResolvers.Type<T>
  Notification: NotificationResolvers.Type<T>
  Payment: PaymentResolvers.Type<T>
  PaypalInformation: PaypalInformationResolvers.Type<T>
  CreditCardInformation: CreditCardInformationResolvers.Type<T>
  Message: MessageResolvers.Type<T>
  Pricing: PricingResolvers.Type<T>
  PlaceViews: PlaceViewsResolvers.Type<T>
  GuestRequirements: GuestRequirementsResolvers.Type<T>
  Policies: PoliciesResolvers.Type<T>
  HouseRules: HouseRulesResolvers.Type<T>
  Amenities: AmenitiesResolvers.Type<T>
  CitySubscriptionPayload: CitySubscriptionPayloadResolvers.Type<T>
  CityPreviousValues: CityPreviousValuesResolvers.Type<T>
}
