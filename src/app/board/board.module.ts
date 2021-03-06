import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {DndModule} from 'ng2-dnd';
import {GadgetModule} from '../gadgets/gadget.module';
import {GridModule} from './grid/grid.module';
import {ConfigurationModule} from '../configuration/configuration.module';
import {LayoutModule} from '../layout/layout.module';
import {AddGadgetModule} from '../add-gadget/add-gadget.module';
import {NotificationModule} from '../notification/notification.module';
import {GadgetPropertyService} from '../gadgets/_common/gadget-property.service';
import {ConfigurationService} from '../services/configuration.service';
import {RuntimeService} from '../services/runtime.service';
import {EndPointService} from '../configuration/tab-endpoint/endpoint.service';
import {BoardComponent} from './board.component';
import {CPUMGadgetComponent} from '../gadgets/cpum/cpum-gadget.component';
import {EdgeServiceListGadgetComponent} from '../gadgets/edge-service-list/edge-service-list-gadget.component';
import {TrendLineGadgetComponent} from '../gadgets/trend-line/trend-line-gadget.component';
import {JobAnalysisGadgetComponent} from '../gadgets/job-analysis/job-analysis-gadget.component';
import {NewsGadgetComponent} from '../gadgets/news/news-gadget.component';
import {TrendGadgetComponent} from '../gadgets/trend/trend-gadget.component';
import {StatisticGadgetComponent} from '../gadgets/statistic/statistic-gadget.component';
import {DiskGadgetComponent} from '../gadgets/disk/disk-gadget.component';
import {PropertyListGadgetComponent} from '../gadgets/property-list/property-list-gadget.component';
import {ServiceListGadgetComponent} from '../gadgets/service-list/service-list-gadget.component';
import {CPUGadgetComponent} from '../gadgets/cpu/cpu-gadget.component';
import {MemoryGadgetComponent} from '../gadgets/memory/memory-gadget.component';
import {ObservableWebSocketService} from '../services/websocket-service';
import {ResponseTimeGadgetComponent} from '../gadgets/response-time/response-time-gadget.component';
import {TypeAheadInputModule} from '../typeahead-input/typeahead-input.module';
import {StorageObjectListComponent} from '../gadgets/storage-object-list/storage-object-list.component';
import {DonutGadgetComponent} from '../gadgets/donut/donut-gadget.component';
import {ToastModule} from '../toast/toast.module';

@NgModule({
    imports: [
        CommonModule,
        NotificationModule,
        AddGadgetModule,
        LayoutModule,
        ConfigurationModule,
        TypeAheadInputModule,
        ToastModule,
        GridModule.withComponents([
            MemoryGadgetComponent,
            CPUGadgetComponent,
            ServiceListGadgetComponent,
            PropertyListGadgetComponent,
            DiskGadgetComponent,
            StatisticGadgetComponent,
            TrendGadgetComponent,
            NewsGadgetComponent,
            JobAnalysisGadgetComponent,
            TrendLineGadgetComponent,
            EdgeServiceListGadgetComponent,
            CPUMGadgetComponent,
            ResponseTimeGadgetComponent,
            StorageObjectListComponent,
            DonutGadgetComponent

        ]),
        GadgetModule,
        DndModule.forRoot(),
        MatButtonModule, MatIconModule,
    ],
    providers: [ EndPointService,
        RuntimeService,
        ConfigurationService,
        GadgetPropertyService,
        ObservableWebSocketService
    ],
    declarations: [
        BoardComponent
    ]
})
export class BoardModule {
}
