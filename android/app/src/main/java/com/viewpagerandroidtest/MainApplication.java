package com.viewpagerandroidtest;

import com.reactnativenavigation.NavigationApplication;
import com.facebook.react.ReactPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return Arrays.<ReactPackage>asList();
  }

  @Override
  public String getJSMainModuleName() {
    return "index";
  }

}
