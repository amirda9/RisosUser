/* eslint-disable no-var */
import { Component, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import Konva from 'konva';
import { AllsmileGQL, MypatGQL } from 'src/generated/graphql';
import { P_ID } from '../constants';
import { DataService } from '../data.service';
import {
  dentalShades,
  teethImg,
  teethImgfa,
} from './dentalShades/dentalShades';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  focus: number;
  stage: Konva.Stage;
  transform: Konva.Transformer;
  teeth: Array<HTMLImageElement>;
  teethKi: Array<Konva.Image>;
  status = true;
  _id: any;
  img = new Image();
  isDown = false;

  teethless: string;
  smileimg: string;

  ratio: number;

  backgroundLayer: Konva.Layer;
  teethLayer: Konva.Layer;
  teethModel: string[];
  teethsPerModel: string[];
  chosenModel: string;
  chosenTeeth: string;
  layerCount: number;
  teethColors: string[];
  chosenColor: string;
  teethPositionX: number;
  teethPositionY: number;
  imageObj3 = new Image();

  constructor(
    private loadingController: LoadingController,
    private route: ActivatedRoute,
    private router: Router,
    private renderer: Renderer2,
    private myPatgql: MypatGQL,
    private alertcontroller: AlertController,
    private smileDesign: AllsmileGQL,
    private dataService: DataService
  ) {
    this.ratio = 1;
    if(dataService.getRatio()){
      this.ratio = dataService.getRatio();
    }

  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    const imageObj = new Image();
    this.myPatgql
      .watch({
        id: 'Patient:' + localStorage.getItem(P_ID),
      })
      .valueChanges.subscribe(
        async (res) => {
          // this.smileimg = res.data.Patient.patientPic.smileImage;
          if (res.data.Patient.patientPic) {
            this.smileimg = res.data.Patient.patientPic.smileImage;
            console.log('smileimg is:' + this.smileimg);
            imageObj.src =
              'https://api.risos.co/mediafiles/' + String(this.smileimg);
            imageObj.crossOrigin = 'anonymous';
          } else {
            // console.log("here")
            const alert = await this.alertcontroller.create({
              cssClass: 'my-custom-class',
              // header: 'Alert',
              // subHeader: 'Subtitle',
              message: 'There is no picture !',
              buttons: [
                {
                  text: 'UPLOAD',
                  cssClass: 'my-custom-class',
                  handler: (blah) => {
                    this.router.navigate(['/tabs/tab2']);
                  },
                },
              ],
            });
            await alert.present();
          }
        },
        (error) => {
          console.log(1);
        }
      );

    this.smileDesign
      .watch({
        pId: localStorage.getItem(P_ID),
      })
      .valueChanges.subscribe((res) => {
        console.log(res.data.allSmiledesignservice.edges[0].node.status);
        this.teethless =
          res.data.allSmiledesignservice.edges[0].node.teethLessImage;
        // console.log(this.teethless);
        // imageObj3.src = "https://api.risos.co/mediafiles/82_74.png";
        this.dataService.setRatio(this.ratio);
        this.imageObj3.src =
          'https://api.risos.co/mediafiles/' + String(this.teethless);
        this.imageObj3.crossOrigin = 'anonymous';
        console.log(this.teethless);
      });

    // imageObj.src = 'https://api.risos.co/mediafiles/1631095827445.jpeg';
    // imageObj.crossOrigin = 'anonymous';
    this.teethModel = Object.keys(teethImg);

    this.teethColors = Object.keys(dentalShades);
    this.teeth = [];
    this.teethKi = [];
    Konva.pixelRatio = 1;
    this.stage = new Konva.Stage({
      container: 'container',
      width: 400,
      height: 400*this.ratio,
    });
    this.teethPositionX = 50;
    this.teethPositionY = 50;
    this.backgroundLayer = new Konva.Layer();
    this.stage.add(this.backgroundLayer);

    const yoda = new Konva.Image({
      name: 'person',
      x: 0,
      y: 0,
      image: imageObj,
      width: 400,
      height: 400*this.ratio,
      draggable: false,
    });
    imageObj.onload = () => {
      // add the shape to the layer
      this.backgroundLayer.add(yoda);
      yoda.zIndex(0);
    };
    this.teethLayer = new Konva.Layer();
    this.stage.add(this.teethLayer);
    // this.imageObj3.src = 'https://api.risos.co/mediafiles/23_23.png';
    // this.imageObj3.crossOrigin = 'anonymous';
  }


  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnDestroy(){
    console.log('it happened');
    const imageObj = new Image();
    imageObj.src =
              'https://api.risos.co/mediafiles/' + String(this.smileimg);
            imageObj.crossOrigin = 'anonymous';
    this.stage = new Konva.Stage({
      container: 'container',
      width: 400,
      height: 400*this.ratio,
    });
    this.teethPositionX = 50;
    this.teethPositionY = 50;
    this.backgroundLayer = new Konva.Layer();
    this.stage.add(this.backgroundLayer);
    const yoda = new Konva.Image({
      name: 'person',
      x: 0,
      y: 0,
      image: imageObj,
      width: 400,
      height: 400*this.ratio,
      draggable: false,
    });
    imageObj.onload = () => {
      // add the shape to the layer
      this.backgroundLayer.add(yoda);
      yoda.zIndex(0);
    };
    this.teethLayer = new Konva.Layer();
    this.stage.add(this.teethLayer);
    this.imageObj3.src =
          'https://api.risos.co/mediafiles/' + String(this.teethless);
        this.imageObj3.crossOrigin = 'anonymous';
  }

  result(e): void {
    this.focus = e.target.value;
    const val = e.target.value;
    // console.log(val)
    const tooths = this.teeth;
    // console.log("hii")
    this.transform.detach();
    for (let j = 0; j < tooths.length; j++) {
      if (j === val) {
        this.teethKi[j].setAttr('opacity', 1);
        this.transform.nodes([this.teethKi[j]]);
        this.teethKi[j].setAttr('draggable', true);
        this.teethKi[j].zIndex(20);
      } else {
        this.teethKi[j].setAttr('opacity', 0.5);
        this.teethKi[j].setAttr('draggable', false);
        this.teethKi[j].zIndex(2);
      }
    }
  }

  async choseTeethModel(ev: any) {
    // console.log('Segment changed', ev.detail.value);
    if (this.chosenModel !== ev.detail.value) {
      this.chosenTeeth = '0';
      this.chosenColor = '0';
      if (this.teethLayer.hasChildren()) {
        this.teethPositionX = this.teethLayer.getChildren()[0].getPosition().x;
        this.teethPositionY = this.teethLayer.getChildren()[0].getPosition().y;
      }
      this.teethLayer.destroyChildren();
      this.teeth = [];
      this.teethKi = [];
      this.chosenModel = ev.detail.value;
      this.teethsPerModel = teethImg[this.chosenModel];
      this.layerCount = 1;

      const loading = await this.loadingController.create({
        message: 'Please Wait',
        duration: 2000,
        spinner: 'bubbles',
      });
      await loading.present();

      this.teethsPerModel.forEach((value) => {
        const tooth = new Image();
        tooth.src = '../assets/' + this.chosenModel + '/' + value + '.png';
        const toothKI = new Konva.Image({
          name: value,
          x: this.teethPositionX,
          y: this.teethPositionY,
          image: tooth,
          draggable: true,
        });
        this.teeth.push(tooth);
        this.teethKi.push(toothKI);
        tooth.onload = () => {
          // add the shape to the layer
          toothKI.zIndex(this.layerCount);
          toothKI.width(196);
          toothKI.height((196 / tooth.width) * tooth.height);
          this.teethLayer.add(toothKI);
          this.layerCount = this.layerCount + 1;
        };
      });

      loading.dismiss();

      this.transform = new Konva.Transformer({
        centeredScaling: true,
        enabledAnchors: ['bottom-right'],
        anchorSize: 15,
      });
      this.teethLayer.add(this.transform);
      this.transform.nodes(this.teethKi);
      this.transform.zIndex(this.layerCount);
    }
  }



  choseTeethPerModel(ev: any) {
    if (this.chosenTeeth !== ev.detail.value) {
      this.chosenTeeth = ev.detail.value;
      if (this.chosenTeeth !== '0') {
        this.transform.detach();
        this.chosenTeeth = ev.detail.value;
        this.teethKi.forEach((value) => {
          console.log(value.getAttr('name'));
          if (value.getAttr('name') === this.chosenTeeth) {
            // console.log("I am here");
            value.setAttr('opacity', 1);
            this.transform.nodes([value]);
            value.setAttr('draggable', true);
            value.zIndex(this.layerCount - 1);
          } else {
            value.setAttr('opacity', 0.7);
            value.setAttr('draggable', false);
            value.zIndex(2);
          }
        });
      } else {
        this.transform.detach();
        this.layerCount = 1;
        this.teethKi.forEach((value) => {
          value.setAttr('opacity', 1);
          value.setAttr('draggable', true);
          value.zIndex(this.layerCount);
          this.layerCount = this.layerCount + 1;
        });
        this.transform.nodes(this.teethKi);
        this.transform.zIndex(this.layerCount);
      }
    }
  }

  choseColor(ev: any) {
    // this.t_color = ev.detail.value;
    console.log(ev.detail.value);
    if (this.chosenColor !== ev.detail.value) {
      this.chosenColor = ev.detail.value;
      if (this.chosenColor !== '0') {
        this.teethKi.forEach((value) => {
          value.cache();
          value.filters([Konva.Filters.RGBA]);
          value
            .red(dentalShades[this.chosenColor].red)
            .blue(dentalShades[this.chosenColor].blue)
            .green(dentalShades[this.chosenColor].green)
            .alpha(0.4);
        });
      } else {
        this.teethKi.forEach((value) => {
          value.clearCache();
          value.filters([]);
        });
      }
    }
  }

  async finalize() {
    const tooths = this.teeth;
    this.status = false;

    // console.log(this.backgroundLayer.getChildren()[0]);
    this.backgroundLayer
      .getChildren()[0]
      .setAttrs({ image: this.imageObj3, zIndex: 3 });
    for (let j = 0; j < tooths.length; j++) {
      this.teethKi[j].setAttr('opacity', 1);
      // this.teethKi[j].setAttr("draggable", false)
      this.teethKi[j].zIndex(1);
    }
  }

  export() {
    this.backgroundLayer.zIndex(99);
    this.transform.remove(); //TODO: remove teeth from background image and change the z index of the teeth
    const data1 = this.stage.toDataURL();
    const data = atob(data1.substring('data:image/png;base64,'.length));
    const asArray = new Uint8Array(data1.length);

    for (var i = 0, len = data.length; i < len; ++i) {
      asArray[i] = data.charCodeAt(i);
    }

    var blob = new Blob([asArray.buffer], { type: 'image/png' });
    const navigationExtras: NavigationExtras = {
      state: {
        image: blob,
      },
    };

    this.ngOnDestroy();
    this.router.navigate(['/comparison'], navigationExtras);
  }
}
