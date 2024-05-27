import Accordion from './components/accordion/Accordion';
import AccordionItem from './components/accordion/AccordionItem';
import FormGroup from './components/forms/FormGroup';
import PasswordField from './components/forms/PasswordField';
import FieldError from './components/forms/FieldError';
import SelectField from './components/forms/SelectField';
import InputField from './components/forms/InputField';
import DatePicker from './components/forms/DatePicker';
import Checkbox from './components/forms/Checkbox';
import Toggle from './components/forms/Toggle';
import Block from './components/common/Block';
import SplitView from './components/common/SplitView';
import Header from './components/headers/Header';
import HeaderBrandsEnum from './components/headers/Header/headerBrands.enum';
import HeaderTitle from './components/headers/HeaderTitle';
import HeaderText from './components/headers/HeaderText';
import HeaderSavedJobs from './components/headers/HeaderSavedJobs';
import Breadcrumbs from './components/headers/Breadcrumbs';
import LanguageSwitcher from './components/navigation/LanguageSwitcher';
import ServiceLinks from './components/headers/ServiceLinks';
import Logo from './components/navigation/Logo';
import MainMenu from './components/navigation/MainMenu';
import UtilityNavigation from './components/navigation/UtilityNavigation';
import Submenu from './components/navigation/Submenu';
import MobileNavigation from './components/navigation/MobileNavigation';
import TabBar from './components/navigation/TabBar';
import NavigationModal from './components/overlays/NavigationModal';
import Modal from './components/overlays/Modal';
import ConfirmationModal from './components/overlays/ConfirmationModal';
import Button from './components/buttons/Button';
import Badge from './components/common/Badge';
import Icon from './components/common/Icon';
import ShowMore from './components/show-more/ShowMore';
import ShowMoreToggle from './components/show-more/ShowMoreToggle';
import Notice from './components/notifications/Notice';
import { NoticeType } from './components/notifications/Notice/Notice.types';
import TextNotice from './components/notifications/TextNotice';
import ActionNotice from './components/notifications/ActionNotice';
import { TextNoticeBackground } from './components/notifications/TextNotice/TextNotice.types';
import Toast from './components/notifications/Toast';
import PromoteAppBanner from './components/notifications/PromoteAppBanner';
import Banner from './components/notifications/Banner';
import Footer from './components/footer/Footer';
import FooterColumnNav from './components/footer/FooterColumnNav';
import FooterBottomNav from './components/footer/FooterBottomNav';
import FooterCopyright from './components/footer/FooterCopyright';
import FooterSocials from './components/footer/FooterSocials';
import { FooterSocial } from './components/footer/FooterSocials/FooterSocials.types';
import MyEnvironmentLayout from './components/my-environment/MyEnvironmentLayout';
import Section from './components/my-environment/Section';
import JobCardList from './components/cards/JobCard/JobCardList';
import JobCard from './components/cards/JobCard';
import JobCardCTA from './components/cards/JobCard/JobCardCTA';
import JobItemMetadata from './components/cards/JobCard/JobItemMetadata';
import MetaInfoCard from './components/cards/MetaInfoCard';
import MetaInfoCardItems from './components/cards/MetaInfoCard/MetaInfoCardItems';
import SummaryCard from './components/cards/SummaryCard';
import LayoutPreloader from './components/loaders/LayoutPreloader';
import PagePreloader from './components/loaders/PagePreloader';
import Preloader from './components/loaders/Preloader';
import Loader from './components/loaders/Loader';
import HeaderIllustration from './components/headers/HeaderIllustration';
import RadioButton from './components/forms/RadioButton';
import TextArea from './components/forms/TextArea';
import GoogleRecaptcha from './components/forms/GoogleRecaptcha';
import UploadField from './components/forms/UploadField';
import Autosuggest from './components/forms/Autosuggest';
import Dropdown from './components/forms/Dropdown';
import Stackable from './components/forms/Stackable';
import Rating from './components/indicators/Rating';
import RatingStars from './components/indicators/RatingStars';
import Steps from './components/indicators/Steps';
import ApplicationProcess from './components/carousels/ApplicationProcess';
import ApplicationProcessCard from './components/carousels/ApplicationProcessCard';
import { ApplicationProcessCardProp } from './components/carousels/ApplicationProcessCard/ApplicationProcessCard.types';
import MultipleCheckboxSelect from './components/forms/MultipleCheckboxSelect';
import AccountInfo from './components/contacts/AccountInfo';
import ContactPerson from './components/contacts/ContactPerson';
import ContactDetails from './components/contacts/ContactDetails';
import PersonProfile from './components/contacts/PersonProfile';
import UserImageBlock from './components/contacts/UserImageBlock';
import Pagination from './components/pagination/Pagination';
import Chat from './components/chat/Chat';
import ChatReply from './components/chat/ChatReply';
import ChatLoader from './components/chat/ChatLoader';
import ChatMultiSelect from './components/chat/ChatMultiSelect';
import ChatQuickSuggest from './components/chat/ChatQuickSuggest';
import Tag from './components/tags/Tag';
import TagCheckbox from './components/tags/TagCheckbox';
import { GoogleRecaptchaRef } from './components/forms/GoogleRecaptcha/GoogleRecaptcha.types';
import LinkElement from './components/pagination/LinkElement';
import ArrowLink from './components/pagination/ArrowLink';
import Sortbar from './components/forms/Sortbar';
import MyRandstad from './components/navigation/MyRandstad';
import SavedJobIcon from './components/cards/JobCard/SavedJobIcon';
import ErrorBoundary from './components/errors/ErrorBoundary';
import ContentTable from './components/tables/ContentTable';
import DataTable from './components/tables/DataTable';
import ConsultantContactForm from './components/contacts/ConsultantContactForm';

import { JobCardProps, SavedJobsProps } from './components/cards/JobCard/JobCard.types';
import {
  MetaItemIcons,
  FourthOptionFieldValues,
  FourthOptionIconType,
} from './components/cards/JobCard/JobItemMetadata/JobItemMetadata.types';
import MetaCardOption from './components/cards/JobCard/JobItemMetadata/MetaCardOption';
import { StepInterface, UpdateStepFunction, StepStateEnum } from './components/indicators/Steps/Steps.types';

export {
  Pagination,
  PasswordField,
  Checkbox,
  Toggle,
  Block,
  Header,
  HeaderSavedJobs,
  HeaderBrandsEnum,
  FormGroup,
  HeaderTitle,
  HeaderText,
  LanguageSwitcher,
  Breadcrumbs,
  ServiceLinks,
  Logo,
  MainMenu,
  UtilityNavigation,
  Submenu,
  MobileNavigation,
  NavigationModal,
  Modal,
  ConfirmationModal,
  Button,
  Badge,
  Icon,
  FieldError,
  Notice,
  TextNotice,
  ActionNotice,
  SelectField,
  InputField,
  DatePicker,
  TabBar,
  FooterColumnNav,
  FooterBottomNav,
  FooterCopyright,
  FooterSocials,
  Footer,
  GoogleRecaptcha,
  Toast,
  MyEnvironmentLayout,
  Section,
  JobCardList,
  JobCard,
  JobCardCTA,
  JobItemMetadata,
  LayoutPreloader,
  PagePreloader,
  Preloader,
  Loader,
  UserImageBlock,
  AccountInfo,
  UploadField,
  ShowMore,
  SplitView,
  HeaderIllustration,
  RadioButton,
  TextArea,
  // Filter,
  Accordion,
  AccordionItem,
  Autosuggest,
  Stackable,
  Dropdown,
  ApplicationProcess,
  ApplicationProcessCard,
  ContactPerson,
  MultipleCheckboxSelect,
  SummaryCard,
  ShowMoreToggle,
  Tag,
  TagCheckbox,
  Rating,
  RatingStars,
  Steps,
  MetaInfoCard,
  MetaInfoCardItems,
  ContactDetails,
  PersonProfile,
  Chat,
  ChatReply,
  ChatLoader,
  ChatMultiSelect,
  ChatQuickSuggest,
  MyRandstad,
  SavedJobIcon,
  LinkElement,
  ArrowLink,
  Sortbar,
  MetaCardOption,
  ContentTable,
  DataTable,
  ConsultantContactForm,
  ErrorBoundary,
  PromoteAppBanner,
  Banner,
};

/**
 * Exporting interfaces and types.
 */
export type {
  NoticeType,
  TextNoticeBackground,
  FooterSocial,
  GoogleRecaptchaRef,
  ApplicationProcessCardProp,
  JobCardProps,
  MetaItemIcons,
  SavedJobsProps,
  FourthOptionFieldValues,
  FourthOptionIconType,
  StepInterface,
  StepStateEnum,
  UpdateStepFunction,
};

export { default as getClosedMarketingMessagesFromCookie } from './utils/marketingMessages/getClosedMarketingMessagesFromCookie';
export { default as setClosedMarketingMessagesCookie } from './utils/marketingMessages/setClosedMarketingMessagesCookie';
export { default as getPromoteAppBannerCookie } from './utils/promoteAppBanner/getPromoteAppBannerCookie';
export { default as setPromoteAppBannerCookie } from './utils/promoteAppBanner/setPromoteAppBannerCookie';
export { default as getAxiosInstance } from './utils/getAxiosInstance';
export { default as getAuthManager } from './utils/auth/getAuthManager';
