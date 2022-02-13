/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-03 15:12:31
 * @LastEditTime: 2022-02-13 00:29:01
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-vite-starter\typings\global.d.ts
 */
declare global {
  /**
   * app 版本号，取 package.json 中 version 的值
   */
  const __APP_VERSION__: string
}

// GlobalComponents for Volar
declare module 'vue' {
  export interface GlobalComponents {
    VcViewer: typeof import('vue-cesium')['VcViewer']

    VcNavigation: typeof import('vue-cesium')['VcNavigation']
    VcCompass: typeof import('vue-cesium')['VcCompass']
    VcZoomControl: typeof import('vue-cesium')['VcZoomControl']
    VcMyLocation: typeof import('vue-cesium')['VcStatusBar']
    VcDistanceLegend: typeof import('vue-cesium')['VcDistanceLegend']
    VcNavigationSm: typeof import('vue-cesium')['VcNavigationSm']
    VcCompassSm: typeof import('vue-cesium')['VcCompassSm']
    VcZoomControlSm: typeof import('vue-cesium')['VcZoomControlSm']
    VcOverviewMap: typeof import('vue-cesium')['VcOverviewMap']
    VcSelectionIndicator: typeof import('vue-cesium')['VcSelectionIndicator']

    VcMeasurements: typeof import('vue-cesium')['VcMeasurements']
    VcDrawings: typeof import('vue-cesium')['VcDrawings']

    VcLayerImagery: typeof import('vue-cesium')['VcLayerImagery']
    VcImageryProviderArcgis: typeof import('vue-cesium')['VcImageryProviderArcgis']
    VcImageryProviderBaidu: typeof import('vue-cesium')['VcImageryProviderBaidu']
    VcImageryProviderBing: typeof import('vue-cesium')['VcImageryProviderBing']
    VcImageryProviderGoogle: typeof import('vue-cesium')['VcImageryProviderGoogle']
    VcImageryProviderGrid: typeof import('vue-cesium')['VcImageryProviderGrid']
    VcImageryProviderIon: typeof import('vue-cesium')['VcImageryProviderIon']
    VcImageryProviderMapbox: typeof import('vue-cesium')['VcImageryProviderMapbox']
    VcImageryProviderOsm: typeof import('vue-cesium')['VcImageryProviderOsm']
    VcImageryProviderSingletile: typeof import('vue-cesium')['VcImageryProviderSingletile']
    VcImageryProviderSupermap: typeof import('vue-cesium')['VcImageryProviderSupermap']
    VcImageryProviderTianditu: typeof import('vue-cesium')['VcImageryProviderTianditu']
    VcImageryProviderTileCoordinates: typeof import('vue-cesium')['VcImageryProviderTileCoordinates']
    VcImageryProviderTms: typeof import('vue-cesium')['VcImageryProviderTms']
    VcImageryProviderTiledcache: typeof import('vue-cesium')['VcImageryProviderTiledcache']
    VcImageryProviderUrltemplate: typeof import('vue-cesium')['VcImageryProviderUrltemplate']
    VcImageryProviderWms: typeof import('vue-cesium')['VcImageryProviderWms']
    VcImageryProviderWmts: typeof import('vue-cesium')['VcImageryProviderWmts']

    VcTerrainProviderCesium: typeof import('vue-cesium')['VcTerrainProviderCesium']
    VcTerrainProviderArcgis: typeof import('vue-cesium')['VcTerrainProviderArcgis']
    VcTerrainProviderVrTheworld: typeof import('vue-cesium')['VcTerrainProviderVrTheworld']
    VcTerrainProviderTianditu: typeof import('vue-cesium')['VcTerrainProviderTianditu']

    VcDatasourceCustom: typeof import('vue-cesium')['VcDatasourceCustom']
    VcDatasourceCzml: typeof import('vue-cesium')['VcDatasourceCzml']
    VcDatasourceGeojson: typeof import('vue-cesium')['VcDatasourceGeojson']
    VcDatasourceKml: typeof import('vue-cesium')['VcDatasourceKml']

    VcEntity: typeof import('vue-cesium')['VcEntity']
    VcGraphicsBillboard: typeof import('vue-cesium')['VcGraphicsBillboard']
    VcGraphicsBox: typeof import('vue-cesium')['VcGraphicsBox']
    VcGraphicsCorridor: typeof import('vue-cesium')['VcGraphicsCorridor']
    VcGraphicsCylinder: typeof import('vue-cesium')['VcGraphicsCylinder']
    VcGraphicsEllipse: typeof import('vue-cesium')['VcGraphicsEllipse']
    VcGraphicsEllipsoid: typeof import('vue-cesium')['VcGraphicsEllipsoid']
    VcGraphicsLabel: typeof import('vue-cesium')['VcGraphicsLabel']
    VcGraphicsModel: typeof import('vue-cesium')['VcGraphicsModel']
    VcGraphicsPath: typeof import('vue-cesium')['VcGraphicsPath']
    VcGraphicsPlane: typeof import('vue-cesium')['VcGraphicsPlane']
    VcGraphicsPoint: typeof import('vue-cesium')['VcGraphicsPoint']
    VcGraphicsPolygon: typeof import('vue-cesium')['VcGraphicsPolygon']
    VcGraphicsPolyline: typeof import('vue-cesium')['VcGraphicsPolyline']
    VcGraphicsPolylineVolume: typeof import('vue-cesium')['VcGraphicsPolylineVolume']
    VcGraphicsRectangle: typeof import('vue-cesium')['VcGraphicsRectangle']
    VcGraphicsTileset: typeof import('vue-cesium')['VcGraphicsTileset']
    VcGraphicsWall: typeof import('vue-cesium')['VcGraphicsWall']

    VcPrimitiveClassification: typeof import('vue-cesium')['VcPrimitiveClassification']
    VcPrimitiveGround: typeof import('vue-cesium')['VcPrimitiveGround']
    VcPrimitiveGroundPolyline: typeof import('vue-cesium')['VcPrimitiveGroundPolyline']
    VcPrimitiveModel: typeof import('vue-cesium')['VcPrimitiveModel']
    VcPrimitive: typeof import('vue-cesium')['VcPrimitive']
    VcPrimitiveTileset: typeof import('vue-cesium')['VcPrimitiveTileset']
    VcPrimitiveParticle: typeof import('vue-cesium')['VcPrimitiveParticle']

    VcCollectionBillboard: typeof import('vue-cesium')['VcCollectionBillboard']
    VcCollectionLabel: typeof import('vue-cesium')['VcCollectionLabel']
    VcCollectionPoint: typeof import('vue-cesium')['VcCollectionPoint']
    VcCollectionPolyline: typeof import('vue-cesium')['VcCollectionPolyline']
    VcCollectionPrimitive: typeof import('vue-cesium')['VcCollectionPrimitive']
    VcBillboard: typeof import('vue-cesium')['VcBillboard']
    VcLabel: typeof import('vue-cesium')['VcLabel']
    VcPoint: typeof import('vue-cesium')['VcPoint']
    VcPolyline: typeof import('vue-cesium')['VcPolyline']
    VcPolygon: typeof import('vue-cesium')['VcPolygon']

    VcGeometryInstance: typeof import('vue-cesium')['VcGeometryInstance']

    VcGeometryBox: typeof import('vue-cesium')['VcGeometryBox']
    VcGeometryBoxOutline: typeof import('vue-cesium')['VcGeometryBoxOutline']
    VcGeometryCircle: typeof import('vue-cesium')['VcGeometryCircle']
    VcGeometryCircleOutline: typeof import('vue-cesium')['VcGeometryCircleOutline']
    VcGeometryPolygonCoplanar: typeof import('vue-cesium')['VcGeometryPolygonCoplanar']
    VcGeometryPolygonCoplanarOutline: typeof import('vue-cesium')['VcGeometryPolygonCoplanarOutline']
    VcGeometryCorridor: typeof import('vue-cesium')['VcGeometryCorridor']
    VcGeometryCorridorOutline: typeof import('vue-cesium')['VcGeometryCorridorOutline']
    VcGeometryCylinder: typeof import('vue-cesium')['VcGeometryCylinder']
    VcGeometryCylinderOutline: typeof import('vue-cesium')['VcGeometryCylinderOutline']
    VcGeometryEllipse: typeof import('vue-cesium')['VcGeometryEllipse']
    VcGeometryEllipseOutline: typeof import('vue-cesium')['VcGeometryEllipseOutline']
    VcGeometryEllipsoid: typeof import('vue-cesium')['VcGeometryEllipsoid']
    VcGeometryEllipsoidOutline: typeof import('vue-cesium')['VcGeometryEllipsoidOutline']
    VcGeometryFrustum: typeof import('vue-cesium')['VcGeometryFrustum']
    VcGeometryFrustumOutline: typeof import('vue-cesium')['VcGeometryFrustumOutline']
    VcGeometryGroundPolyline: typeof import('vue-cesium')['VcGeometryGroundPolyline']
    VcGeometryPlane: typeof import('vue-cesium')['VcGeometryPlane']
    VcGeometryPlaneOutline: typeof import('vue-cesium')['VcGeometryPlaneOutline']
    VcGeometryPolygon: typeof import('vue-cesium')['VcGeometryPolygon']
    VcGeometryPolygonOutline: typeof import('vue-cesium')['VcGeometryPolygonOutline']
    VcGeometryPolyline: typeof import('vue-cesium')['VcGeometryPolyline']
    VcGeometryPolylineVolume: typeof import('vue-cesium')['VcGeometryPolylineVolume']
    VcGeometryPolylineVolumeOutline: typeof import('vue-cesium')['VcGeometryPolylineVolumeOutline']
    VcGeometryRectangle: typeof import('vue-cesium')['VcGeometryRectangle']
    VcGeometryRectangleOutline: typeof import('vue-cesium')['VcGeometryRectangleOutline']
    VcGeometrySimplePolyline: typeof import('vue-cesium')['VcGeometrySimplePolyline']
    VcGeometrySphere: typeof import('vue-cesium')['VcGeometrySphere']
    VcGeometrySphereOutline: typeof import('vue-cesium')['VcGeometrySphereOutline']
    VcGeometryWall: typeof import('vue-cesium')['VcGeometryWall']
    VcGeometryWallOutline: typeof import('vue-cesium')['VcGeometryWallOutline']

    VcOverlayHtml: typeof import('vue-cesium')['VcOverlayHtml']
    VcOverlayHeatmap: typeof import('vue-cesium')['VcOverlayHeatmap']
    VcOverlayWind: typeof import('vue-cesium')['VcOverlayWind']
    VcOverlayDynamic: typeof import('vue-cesium')['VcOverlayDynamic']
    VcOverlayEcharts: typeof import('vue-cesium')['VcOverlayEcharts']

    VcPostProcessStage: typeof import('vue-cesium')['VcPostProcessStage']
    VcPostProcessStageScan: typeof import('vue-cesium')['VcPostProcessStageScan']
    VcPostProcessStageCollection: typeof import('vue-cesium')['VcPostProcessStageCollection']

    VcBtn: typeof import('vue-cesium')['VcBtn']
    VcIcon: typeof import('vue-cesium')['VcIcon']
    VcTooltip: typeof import('vue-cesium')['VcTooltip']
    VcAjaxBar: typeof import('vue-cesium')['VcAjaxBar']
    VcSkeleton: typeof import('vue-cesium')['VcSkeleton']
    VcSpinnerBall: typeof import('vue-cesium')['VcSpinnerBall']
    VcSpinnerBars: typeof import('vue-cesium')['VcSpinnerBars']
    VcSpinnerDots: typeof import('vue-cesium')['VcSpinnerDots']
    VcSpinnerGears: typeof import('vue-cesium')['VcSpinnerGears']
    VcSpinnerHourglass: typeof import('vue-cesium')['VcSpinnerHourglass']
    VcSpinnerIos: typeof import('vue-cesium')['VcSpinnerIos']
    VcSpinnerOrbit: typeof import('vue-cesium')['VcSpinnerOrbit']
    VcSpinnerOval: typeof import('vue-cesium')['VcSpinnerOval']
    VcSpinnerPuff: typeof import('vue-cesium')['VcSpinnerPuff']
    VcSpinnerRings: typeof import('vue-cesium')['VcSpinnerRings']
    VcSpinnerTail: typeof import('vue-cesium')['VcSpinnerTail']
    VcSpinner: typeof import('vue-cesium')['VcSpinner']
    VcFab: typeof import('vue-cesium')['VcFab']
    VcFabAction: typeof import('vue-cesium')['VcFabAction']

    VcConfigProvider: typeof import('vue-cesium')['VcConfigProvider']
    VcAnalysisFlood: typeof import('vue-cesium')['VcAnalysisFlood']
  }
}

export {}