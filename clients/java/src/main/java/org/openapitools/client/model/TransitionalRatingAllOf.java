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
 * TransitionalRatingAllOf
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2023-07-12T11:57:07.491-05:00[America/Chicago]")
public class TransitionalRatingAllOf {
  public static final String SERIALIZED_NAME_SOURCE_RATINGS = "source-ratings";
  @SerializedName(SERIALIZED_NAME_SOURCE_RATINGS)
  private List<String> sourceRatings;

  public static final String SERIALIZED_NAME_CONDITIONS = "conditions";
  @SerializedName(SERIALIZED_NAME_CONDITIONS)
  private List<String> conditions;

  public static final String SERIALIZED_NAME_EVALUATIONS = "evaluations";
  @SerializedName(SERIALIZED_NAME_EVALUATIONS)
  private List<String> evaluations;

  public TransitionalRatingAllOf() {
  }

  public TransitionalRatingAllOf sourceRatings(List<String> sourceRatings) {
    
    this.sourceRatings = sourceRatings;
    return this;
  }

  public TransitionalRatingAllOf addSourceRatingsItem(String sourceRatingsItem) {
    if (this.sourceRatings == null) {
      this.sourceRatings = new ArrayList<>();
    }
    this.sourceRatings.add(sourceRatingsItem);
    return this;
  }

   /**
   * Get sourceRatings
   * @return sourceRatings
  **/
  @javax.annotation.Nullable

  public List<String> getSourceRatings() {
    return sourceRatings;
  }


  public void setSourceRatings(List<String> sourceRatings) {
    this.sourceRatings = sourceRatings;
  }


  public TransitionalRatingAllOf conditions(List<String> conditions) {
    
    this.conditions = conditions;
    return this;
  }

  public TransitionalRatingAllOf addConditionsItem(String conditionsItem) {
    if (this.conditions == null) {
      this.conditions = new ArrayList<>();
    }
    this.conditions.add(conditionsItem);
    return this;
  }

   /**
   * Get conditions
   * @return conditions
  **/
  @javax.annotation.Nullable

  public List<String> getConditions() {
    return conditions;
  }


  public void setConditions(List<String> conditions) {
    this.conditions = conditions;
  }


  public TransitionalRatingAllOf evaluations(List<String> evaluations) {
    
    this.evaluations = evaluations;
    return this;
  }

  public TransitionalRatingAllOf addEvaluationsItem(String evaluationsItem) {
    if (this.evaluations == null) {
      this.evaluations = new ArrayList<>();
    }
    this.evaluations.add(evaluationsItem);
    return this;
  }

   /**
   * Get evaluations
   * @return evaluations
  **/
  @javax.annotation.Nullable

  public List<String> getEvaluations() {
    return evaluations;
  }


  public void setEvaluations(List<String> evaluations) {
    this.evaluations = evaluations;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TransitionalRatingAllOf transitionalRatingAllOf = (TransitionalRatingAllOf) o;
    return Objects.equals(this.sourceRatings, transitionalRatingAllOf.sourceRatings) &&
        Objects.equals(this.conditions, transitionalRatingAllOf.conditions) &&
        Objects.equals(this.evaluations, transitionalRatingAllOf.evaluations);
  }

  @Override
  public int hashCode() {
    return Objects.hash(sourceRatings, conditions, evaluations);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TransitionalRatingAllOf {\n");
    sb.append("    sourceRatings: ").append(toIndentedString(sourceRatings)).append("\n");
    sb.append("    conditions: ").append(toIndentedString(conditions)).append("\n");
    sb.append("    evaluations: ").append(toIndentedString(evaluations)).append("\n");
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
    openapiFields.add("source-ratings");
    openapiFields.add("conditions");
    openapiFields.add("evaluations");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to TransitionalRatingAllOf
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!TransitionalRatingAllOf.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in TransitionalRatingAllOf is not found in the empty JSON string", TransitionalRatingAllOf.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!TransitionalRatingAllOf.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `TransitionalRatingAllOf` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("source-ratings") != null && !jsonObj.get("source-ratings").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `source-ratings` to be an array in the JSON string but got `%s`", jsonObj.get("source-ratings").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("conditions") != null && !jsonObj.get("conditions").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `conditions` to be an array in the JSON string but got `%s`", jsonObj.get("conditions").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("evaluations") != null && !jsonObj.get("evaluations").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `evaluations` to be an array in the JSON string but got `%s`", jsonObj.get("evaluations").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!TransitionalRatingAllOf.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'TransitionalRatingAllOf' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<TransitionalRatingAllOf> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(TransitionalRatingAllOf.class));

       return (TypeAdapter<T>) new TypeAdapter<TransitionalRatingAllOf>() {
           @Override
           public void write(JsonWriter out, TransitionalRatingAllOf value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public TransitionalRatingAllOf read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of TransitionalRatingAllOf given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of TransitionalRatingAllOf
  * @throws IOException if the JSON string is invalid with respect to TransitionalRatingAllOf
  */
  public static TransitionalRatingAllOf fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, TransitionalRatingAllOf.class);
  }

 /**
  * Convert an instance of TransitionalRatingAllOf to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

