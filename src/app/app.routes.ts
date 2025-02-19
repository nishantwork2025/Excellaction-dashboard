import { Routes } from '@angular/router';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { EcommerceComponent } from './dashboard/ecommerce/ecommerce.component';
import { CrmComponent } from './dashboard/crm/crm.component';
import { ProjectManagementComponent } from './dashboard/project-management/project-management.component';
import { LmsComponent } from './dashboard/lms/lms.component';
import { HelpDeskComponent } from './dashboard/help-desk/help-desk.component';
import { EcommercePageComponent } from './pages/ecommerce-page/ecommerce-page.component';
import { EProductsGridComponent } from './pages/ecommerce-page/e-products-grid/e-products-grid.component';
import { EProductsListComponent } from './pages/ecommerce-page/e-products-list/e-products-list.component';
import { EProductDetailsComponent } from './pages/ecommerce-page/e-product-details/e-product-details.component';
import { EOrdersListComponent } from './pages/ecommerce-page/e-orders-list/e-orders-list.component';
import { ECustomersListComponent } from './pages/ecommerce-page/e-customers-list/e-customers-list.component';
import { ESellersComponent } from './pages/ecommerce-page/e-sellers/e-sellers.component';
import { ESellerDetailsComponent } from './pages/ecommerce-page/e-seller-details/e-seller-details.component';
import { EOrderDetailsComponent } from './pages/ecommerce-page/e-order-details/e-order-details.component';
import { ECartComponent } from './pages/ecommerce-page/e-cart/e-cart.component';
import { ECheckoutComponent } from './pages/ecommerce-page/e-checkout/e-checkout.component';
import { ECreateProductComponent } from './pages/ecommerce-page/e-create-product/e-create-product.component';
import { CrmPageComponent } from './pages/crm-page/crm-page.component';
import { CContactsComponent } from './pages/crm-page/c-contacts/c-contacts.component';
import { CCustomersComponent } from './pages/crm-page/c-customers/c-customers.component';
import { CLeadsComponent } from './pages/crm-page/c-leads/c-leads.component';
import { COpportunitiesComponent } from './pages/crm-page/c-opportunities/c-opportunities.component';
import { ProjectManagementPageComponent } from './pages/project-management-page/project-management-page.component';
import { PmProjectsListComponent } from './pages/project-management-page/pm-projects-list/pm-projects-list.component';
import { PmProjectDetailsComponent } from './pages/project-management-page/pm-project-details/pm-project-details.component';
import { PmCreateProjectComponent } from './pages/project-management-page/pm-create-project/pm-create-project.component';
import { PmClientsComponent } from './pages/project-management-page/pm-clients/pm-clients.component';
import { PmTeamsComponent } from './pages/project-management-page/pm-teams/pm-teams.component';
import { PmTasksComponent } from './pages/project-management-page/pm-tasks/pm-tasks.component';
import { PmUsersComponent } from './pages/project-management-page/pm-users/pm-users.component';
import { PmKanbanBoardComponent } from './pages/project-management-page/pm-kanban-board/pm-kanban-board.component';
import { LmsPageComponent } from './pages/lms-page/lms-page.component';
import { LCoursesListComponent } from './pages/lms-page/l-courses-list/l-courses-list.component';
import { LCourseDetailsComponent } from './pages/lms-page/l-course-details/l-course-details.component';
import { LCreateCourseComponent } from './pages/lms-page/l-create-course/l-create-course.component';
import { LLessonPreviewComponent } from './pages/lms-page/l-lesson-preview/l-lesson-preview.component';
import { HelpDeskPageComponent } from './pages/help-desk-page/help-desk-page.component';
import { HdTicketsComponent } from './pages/help-desk-page/hd-tickets/hd-tickets.component';
import { HdReportsComponent } from './pages/help-desk-page/hd-reports/hd-reports.component';
import { HdAgentsComponent } from './pages/help-desk-page/hd-agents/hd-agents.component';
import { EventsListComponent } from './pages/events-page/events-list/events-list.component';
import { EventDetailsComponent } from './pages/events-page/event-details/event-details.component';
import { CreateAnEventComponent } from './pages/events-page/create-an-event/create-an-event.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { InvoicesPageComponent } from './pages/invoices-page/invoices-page.component';
import { InvoicesComponent } from './pages/invoices-page/invoices/invoices.component';
import { InvoiceDetailsComponent } from './pages/invoices-page/invoice-details/invoice-details.component';
import { AppsComponent } from './apps/apps.component';
import { KanbanBoardComponent } from './apps/kanban-board/kanban-board.component';
import { ToDoListComponent } from './apps/to-do-list/to-do-list.component';
import { ContactsComponent } from './apps/contacts/contacts.component';
import { PricingPageComponent } from './pages/pricing-page/pricing-page.component';
import { StarterComponent } from './starter/starter.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { NotificationsPageComponent } from './pages/notifications-page/notifications-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { TeamMembersComponent } from './pages/users-page/team-members/team-members.component';
import { UsersListComponent } from './pages/users-page/users-list/users-list.component';
import { AddUserComponent } from './pages/users-page/add-user/add-user.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { PUserProfileComponent } from './pages/profile-page/p-user-profile/p-user-profile.component';
import { PProjectsComponent } from './pages/profile-page/p-projects/p-projects.component';
import { PTeamsComponent } from './pages/profile-page/p-teams/p-teams.component';
import { SettingsComponent } from './settings/settings.component';
import { AccountSettingsComponent } from './settings/account-settings/account-settings.component';
import { ChangePasswordComponent } from './settings/change-password/change-password.component';
import { ConnectionsComponent } from './settings/connections/connections.component';
import { PrivacyPolicyComponent } from './settings/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './settings/terms-conditions/terms-conditions.component';
import { MapsPageComponent } from './pages/maps-page/maps-page.component';
import { IconsComponent } from './icons/icons.component';
import { FeathericonsComponent } from './icons/feathericons/feathericons.component';
import { RemixiconComponent } from './icons/remixicon/remixicon.component';
import { MaterialSymbolsComponent } from './icons/material-symbols/material-symbols.component';
import { ChartsComponent } from './charts/charts.component';
import { ApexchartsComponent } from './charts/apexcharts/apexcharts.component';
import { GaugeComponent } from './charts/gauge/gauge.component';
import { InternalErrorComponent } from './common/internal-error/internal-error.component';
import { TimelinePageComponent } from './pages/timeline-page/timeline-page.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { TestimonialsPageComponent } from './pages/testimonials-page/testimonials-page.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { FileManagerComponent } from './apps/file-manager/file-manager.component';
import { CalendarComponent } from './apps/calendar/calendar.component';
import { ChatComponent } from './apps/chat/chat.component';
import { EmailComponent } from './apps/email/email.component';
import { InboxComponent } from './apps/email/inbox/inbox.component';
import { ComposeComponent } from './apps/email/compose/compose.component';
import { ReadComponent } from './apps/email/read/read.component';
import { SocialFeedPageComponent } from './pages/social-feed-page/social-feed-page.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { LockScreenComponent } from './authentication/lock-screen/lock-screen.component';
import { ConfirmEmailComponent } from './authentication/confirm-email/confirm-email.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { TablesComponent } from './tables/tables.component';
import { FormsComponent } from './forms/forms.component';
import { BasicElementsComponent } from './forms/basic-elements/basic-elements.component';
import { AdvancedElementsComponent } from './forms/advanced-elements/advanced-elements.component';
import { WizardComponent } from './forms/wizard/wizard.component';
import { EditorsComponent } from './forms/editors/editors.component';
import { FileUploaderComponent } from './forms/file-uploader/file-uploader.component';
import { UiElementsComponent } from './ui-elements/ui-elements.component';
import { AlertsComponent } from './ui-elements/alerts/alerts.component';
import { AutocompleteComponent } from './ui-elements/autocomplete/autocomplete.component';
import { AvatarsComponent } from './ui-elements/avatars/avatars.component';
import { AccordionComponent } from './ui-elements/accordion/accordion.component';
import { BadgesComponent } from './ui-elements/badges/badges.component';
import { BreadcrumbComponent } from './ui-elements/breadcrumb/breadcrumb.component';
import { ButtonToggleComponent } from './ui-elements/button-toggle/button-toggle.component';
import { BottomSheetComponent } from './ui-elements/bottom-sheet/bottom-sheet.component';
import { ButtonsComponent } from './ui-elements/buttons/buttons.component';
import { CardsComponent } from './ui-elements/cards/cards.component';
import { CarouselsComponent } from './ui-elements/carousels/carousels.component';
import { CheckboxComponent } from './ui-elements/checkbox/checkbox.component';
import { ChipsComponent } from './ui-elements/chips/chips.component';
import { ColorPickerComponent } from './ui-elements/color-picker/color-picker.component';
import { ClipboardComponent } from './ui-elements/clipboard/clipboard.component';
import { ExpansionComponent } from './ui-elements/expansion/expansion.component';
import { DragDropComponent } from './ui-elements/drag-drop/drag-drop.component';
import { DividerComponent } from './ui-elements/divider/divider.component';
import { DialogComponent } from './ui-elements/dialog/dialog.component';
import { DatepickerComponent } from './ui-elements/datepicker/datepicker.component';
import { IconComponent } from './ui-elements/icon/icon.component';
import { GridListComponent } from './ui-elements/grid-list/grid-list.component';
import { FormFieldComponent } from './ui-elements/form-field/form-field.component';
import { UtilitiesComponent } from './ui-elements/utilities/utilities.component';
import { VideosComponent } from './ui-elements/videos/videos.component';
import { TreeComponent } from './ui-elements/tree/tree.component';
import { TabsComponent } from './ui-elements/tabs/tabs.component';
import { TableComponent } from './ui-elements/table/table.component';
import { ToolbarComponent } from './ui-elements/toolbar/toolbar.component';
import { TypographyComponent } from './ui-elements/typography/typography.component';
import { StepperComponent } from './ui-elements/stepper/stepper.component';
import { SnackbarComponent } from './ui-elements/snackbar/snackbar.component';
import { SliderComponent } from './ui-elements/slider/slider.component';
import { SlideToggleComponent } from './ui-elements/slide-toggle/slide-toggle.component';
import { SidenavComponent } from './ui-elements/sidenav/sidenav.component';
import { SelectComponent } from './ui-elements/select/select.component';
import { RatioComponent } from './ui-elements/ratio/ratio.component';
import { RadioComponent } from './ui-elements/radio/radio.component';
import { ProgressBarComponent } from './ui-elements/progress-bar/progress-bar.component';
import { PaginationComponent } from './ui-elements/pagination/pagination.component';
import { MenusComponent } from './ui-elements/menus/menus.component';
import { ListboxComponent } from './ui-elements/listbox/listbox.component';
import { ListComponent } from './ui-elements/list/list.component';
import { InputComponent } from './ui-elements/input/input.component';
import { TooltipComponent } from './ui-elements/tooltip/tooltip.component';
import { MainDashboardComponent } from './component/main-dashboard/main-dashboard.component';
import { AllRetailersComponent } from './component/all-retailers/all-retailers.component';
import { RetailersProfileComponent } from './component/retailers-profile/retailers-profile.component';
import { OnboardKeysPendingComponent } from './component/onboard-keys-pending/onboard-keys-pending.component';
import { InactivatedComponent } from './component/inactivated/inactivated.component';
import { RetailersDashboardComponent } from './component/retailers-dashboard/retailers-dashboard.component';
import { RetailersDetailsProfileComponent } from './component/retailers-profile/retailers-details-profile/retailers-details-profile.component';
import { ReconnectNowComponent } from './component/reconnect-now/reconnect-now.component';
import { SnoozersComponent } from './component/snoozers/snoozers.component';
import { StaticsComponent } from './component/Activations-tab/statics/statics.component';
import { ActivationsDataComponent } from './component/Activations-tab/activations-data/activations-data.component';
import { ForwardTasksComponent } from './component/task/forward-tasks/forward-tasks.component';
import { RunningTaskComponent } from './component/task/running-task/running-task.component';
import { OpenTaskComponent } from './component/task/open-task/open-task.component';
import { OpenTicketComponent } from './component/Support/open-ticket/open-ticket.component';
import { DeviceComponent } from './component/Support/device/device.component';
import { WelcomeRetailersComponent } from './component/welcome-retailers/welcome-retailers.component';
import { ViewTicketsComponent } from './component/Support/view-tickets/view-tickets.component';
import { CustomerDetailsComponent } from './component/customer-details/customer-details.component';
import { CreateTicketComponent } from './component/Support/open-ticket/create-ticket/create-ticket.component';


export const routes: Routes = [
    // { path: '',component: MainDashboardComponent},
    { path: '',component: RetailersDashboardComponent},
    { path: 'customer-details',component: CustomerDetailsComponent},
    
    { path: 'all-retailers',component: AllRetailersComponent},
    { path: 'retailers-profile/:id',component: RetailersProfileComponent},
    { path: 'onboard-key-pending',component: OnboardKeysPendingComponent},
    { path: 'inactivated',component: InactivatedComponent},
    // { path: 'retailers-profile',component: RetailersProfileComponent},
    // { path: 'retailers-detail-profile',component: RetailersDetailsProfileComponent},
    { path: 'retailers-detail-profile/:id',component: RetailersDetailsProfileComponent},
    { path: 'reconnect-now',component: ReconnectNowComponent},
    { path: 'snoozers',component: SnoozersComponent},
    { path: 'static',component: StaticsComponent},
    { path: 'activation-data',component: ActivationsDataComponent},
    { path: 'forward-task',component: ForwardTasksComponent},
    { path: 'running-task',component: RunningTaskComponent},
    { path: 'open-task',component: OpenTaskComponent},
    { path: 'open-ticket',component: OpenTicketComponent},
    { path: 'create-ticket',component: CreateTicketComponent},
    { path: 'device',component: DeviceComponent},
    { path: 'welcome-retailers',component: WelcomeRetailersComponent},
    // { path: 'view-ticket',component: ViewTicketsComponent},
    { path: 'view-ticket/:id', component: ViewTicketsComponent },

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];