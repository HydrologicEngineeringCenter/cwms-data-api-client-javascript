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
 * PoolNameType
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2023-07-12T11:57:07.491-05:00[America/Chicago]")
public class PoolNameType {
  public static final String SERIALIZED_NAME_OFFICE_ID = "officeId";
  @SerializedName(SERIALIZED_NAME_OFFICE_ID)
  private String officeId;

  public static final String SERIALIZED_NAME_POOL_NAME = "poolName";
  @SerializedName(SERIALIZED_NAME_POOL_NAME)
  private String poolName;

  public PoolNameType() {
  }

  public PoolNameType officeId(String officeId) {
    
    this.officeId = officeId;
    return this;
  }

   /**
   * Get officeId
   * @return officeId
  **/
  @javax.annotation.Nullable

  public String getOfficeId() {
    return officeId;
  }


  public void setOfficeId(String officeId) {
    this.officeId = officeId;
  }


  public PoolNameType poolName(String poolName) {
    
    this.poolName = poolName;
    return this;
  }

   /**
   * Get poolName
   * @return poolName
  **/
  @javax.annotation.Nullable

  public String getPoolName() {
    return poolName;
  }


  public void setPoolName(String poolName) {
    this.poolName = poolName;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PoolNameType poolNameType = (PoolNameType) o;
    return Objects.equals(this.officeId, poolNameType.officeId) &&
        Objects.equals(this.poolName, poolNameType.poolName);
  }

  @Override
  public int hashCode() {
    return Objects.hash(officeId, poolName);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PoolNameType {\n");
    sb.append("    officeId: ").append(toIndentedString(officeId)).append("\n");
    sb.append("    poolName: ").append(toIndentedString(poolName)).append("\n");
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
    openapiFields.add("officeId");
    openapiFields.add("poolName");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to PoolNameType
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!PoolNameType.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in PoolNameType is not found in the empty JSON string", PoolNameType.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!PoolNameType.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `PoolNameType` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("officeId") != null && !jsonObj.get("officeId").isJsonNull()) && !jsonObj.get("officeId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `officeId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("officeId").toString()));
      }
      if ((jsonObj.get("poolName") != null && !jsonObj.get("poolName").isJsonNull()) && !jsonObj.get("poolName").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `poolName` to be a primitive type in the JSON string but got `%s`", jsonObj.get("poolName").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!PoolNameType.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'PoolNameType' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<PoolNameType> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(PoolNameType.class));

       return (TypeAdapter<T>) new TypeAdapter<PoolNameType>() {
           @Override
           public void write(JsonWriter out, PoolNameType value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public PoolNameType read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of PoolNameType given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of PoolNameType
  * @throws IOException if the JSON string is invalid with respect to PoolNameType
  */
  public static PoolNameType fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, PoolNameType.class);
  }

 /**
  * Convert an instance of PoolNameType to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

