### Current template

```bash

<adm-framework>

  <!-- Top header -->
  <adm-header [model]="headerModel">
    <adm-header-user [model]="headerUserModel"></adm-header-user>
    <adm-header-ctrlbar></adm-header-ctrlbar>
  </adm-header>

  <!-- Left side column. contains the logo and sidebar -->
  <adm-sidebar>
    <adm-sidebar-user [model]="sideBarUserModel"></adm-sidebar-user>
    <adm-sidebar-search></adm-sidebar-search>
    <adm-sidebar-treeview [items]="treeViewItems"></adm-sidebar-treeview>
  </adm-sidebar>

  <!-- The place to inject your components. -->
  <adm-content>
    To be continue...
  </adm-content>

  <!-- Footer. -->
  <adm-footer [model]="footerModel"></adm-footer>

  <!--right side bar-->
  <adm-ctrlbar [activeId]="'homeTab'">
    <adm-ctrlbar-tab *ngFor="let tab of ctrlBarTabs" [id]="tab.id">
      <ng-template adm-ctrlbar-tab-title><i [ngClass]="tab.icon">{{tab.title}}</i></ng-template>
      <ng-template adm-ctrlbar-tab-content>
        <adm-ctrlbar-item *ngFor="let item of tab.items" [model]="item"></adm-ctrlbar-item>
      </ng-template>
    </adm-ctrlbar-tab>
  </adm-ctrlbar>

</adm-framework>

```

![](https://github.com/zmlcoder/angular2-adminlte/blob/master/screenshots/demo.gif)

## Prerequisites

Both the CLI and generated project have dependencies that require Node 6.9.0 or higher, together
with NPM 3 or higher.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)
```bash
npm install -g @angular/cli
npm install
```

## Running
```bash
ng serve
```
Navigate to `http://localhost:4200/`

## License
 [MIT](/LICENSE)
