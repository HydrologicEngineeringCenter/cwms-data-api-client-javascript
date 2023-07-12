/*
 * CWMS Radar
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 2.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.Office;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import org.openapitools.client.JSON;

/**
 * OfficesFMT
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2023-07-12T11:57:07.491-05:00[America/Chicago]")
public class OfficesFMT {
  public static final String SERIALIZED_NAME_OFFICES = "offices";
  @SerializedName(SERIALIZED_NAME_OFFICES)
  private List<Office> offices;

  public OfficesFMT() {
  }

  public OfficesFMT offices(List<Office> offices) {
    
    this.offices = offices;
    return this;
  }

  public OfficesFMT addOfficesItem(Office officesItem) {
    if (this.offices == null) {
      this.offices = new ArrayList<>();
    }
    this.offices.add(officesItem);
    return this;
  }

   /**
   * Get offices
   * @return offices
  **/
  @javax.annotation.Nullable

  public List<Office> getOffices() {
    return offices;
  }


  public void setOffices(List<Office> offices) {
    this.offices = offices;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OfficesFMT officesFMT = (OfficesFMT) o;
    return Objects.equals(this.offices, officesFMT.offices);
  }

  @Override
  public int hashCode() {
    return Objects.hash(offices);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class OfficesFMT {\n");
    sb.append("    offices: ").append(toIndentedString(offices)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("offices");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to OfficesFMT
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!OfficesFMT.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in OfficesFMT is not found in the empty JSON string", OfficesFMT.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!OfficesFMT.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `OfficesFMT` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if (jsonObj.get("offices") != null && !jsonObj.get("offices").isJsonNull()) {
        JsonArray jsonArrayoffices = jsonObj.getAsJsonArray("offices");
        if (jsonArrayoffices != null) {
          // ensure the json data is an array
          if (!jsonObj.get("offices").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `offices` to be an array in the JSON string but got `%s`", jsonObj.get("offices").toString()));
          }

          // validate the optional field `offices` (array)
          for (int i = 0; i < jsonArrayoffices.size(); i++) {
            Office.validateJsonObject(jsonArrayoffices.get(i).getAsJsonObject());
          };
        }
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!OfficesFMT.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'OfficesFMT' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<OfficesFMT> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(OfficesFMT.class));

       return (TypeAdapter<T>) new TypeAdapter<OfficesFMT>() {
           @Override
           public void write(JsonWriter out, OfficesFMT value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public OfficesFMT read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of OfficesFMT given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of OfficesFMT
  * @throws IOException if the JSON string is invalid with respect to OfficesFMT
  */
  public static OfficesFMT fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, OfficesFMT.class);
  }

 /**
  * Convert an instance of OfficesFMT to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

