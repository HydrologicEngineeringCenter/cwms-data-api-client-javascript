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
 * Offset
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2023-07-12T11:57:07.491-05:00[America/Chicago]")
public class Offset {
  public static final String SERIALIZED_NAME_ESTIMATE = "estimate";
  @SerializedName(SERIALIZED_NAME_ESTIMATE)
  private Boolean estimate;

  public static final String SERIALIZED_NAME_TO_DATUM = "toDatum";
  @SerializedName(SERIALIZED_NAME_TO_DATUM)
  private String toDatum;

  public static final String SERIALIZED_NAME_VALUE = "value";
  @SerializedName(SERIALIZED_NAME_VALUE)
  private Double value;

  public Offset() {
  }

  public Offset estimate(Boolean estimate) {
    
    this.estimate = estimate;
    return this;
  }

   /**
   * Get estimate
   * @return estimate
  **/
  @javax.annotation.Nullable

  public Boolean getEstimate() {
    return estimate;
  }


  public void setEstimate(Boolean estimate) {
    this.estimate = estimate;
  }


  public Offset toDatum(String toDatum) {
    
    this.toDatum = toDatum;
    return this;
  }

   /**
   * Get toDatum
   * @return toDatum
  **/
  @javax.annotation.Nullable

  public String getToDatum() {
    return toDatum;
  }


  public void setToDatum(String toDatum) {
    this.toDatum = toDatum;
  }


  public Offset value(Double value) {
    
    this.value = value;
    return this;
  }

   /**
   * Get value
   * @return value
  **/
  @javax.annotation.Nullable

  public Double getValue() {
    return value;
  }


  public void setValue(Double value) {
    this.value = value;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Offset offset = (Offset) o;
    return Objects.equals(this.estimate, offset.estimate) &&
        Objects.equals(this.toDatum, offset.toDatum) &&
        Objects.equals(this.value, offset.value);
  }

  @Override
  public int hashCode() {
    return Objects.hash(estimate, toDatum, value);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Offset {\n");
    sb.append("    estimate: ").append(toIndentedString(estimate)).append("\n");
    sb.append("    toDatum: ").append(toIndentedString(toDatum)).append("\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
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
    openapiFields.add("estimate");
    openapiFields.add("toDatum");
    openapiFields.add("value");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to Offset
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!Offset.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in Offset is not found in the empty JSON string", Offset.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!Offset.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `Offset` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("toDatum") != null && !jsonObj.get("toDatum").isJsonNull()) && !jsonObj.get("toDatum").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `toDatum` to be a primitive type in the JSON string but got `%s`", jsonObj.get("toDatum").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!Offset.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'Offset' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<Offset> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(Offset.class));

       return (TypeAdapter<T>) new TypeAdapter<Offset>() {
           @Override
           public void write(JsonWriter out, Offset value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public Offset read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of Offset given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of Offset
  * @throws IOException if the JSON string is invalid with respect to Offset
  */
  public static Offset fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, Offset.class);
  }

 /**
  * Convert an instance of Offset to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

